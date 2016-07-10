'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

// Main
import path from 'path';
import gulp from 'gulp';
import pkg from './package';

// Utils
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
// import changed from 'gulp-changed';
import browserSync from 'browser-sync';

// Styles
import sass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import sourcemaps from 'gulp-sourcemaps';

// Scripts
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// Assets
import imagemin from 'gulp-imagemin';
// import svgmin from 'gulp-svgmin';
// import svgstore from 'gulp-svgstore';

// Deploy
import rsync from 'gulp-rsync';
import ftp from 'vinyl-ftp';

// PostCSS
import postcss from 'gulp-postcss';
import rucksack from 'rucksack-css';
import fontMagician from 'postcss-font-magician';
import gcmq from 'gulp-group-css-media-queries';
import cssnano from 'gulp-cssnano';
// import rupture from 'rupture';


///////////////////////////////////////////
// CONFIGURATION                         //
///////////////////////////////////////////

const deploy = {
    'ftp': {
        'host':     'ftp.domain.com.br',
        'user':     '',
        'password': '',
        'parallel': 10,
        'dest':     './public_html',
        'log':      gutil.log
    },
    'rsync': {
        'root': './www',
        'hostname': 'ftp.domain.com.br',
        'destination': './public_html'
    },
    'paths': [
        'assets/fonts/*',
        'assets/images/*',
        'assets/scripts/main.min.js',
        'assets/styles/main.min.css',
        'includes/*',
        '*.{php,html,md,txt}'
    ]
};

const paths = {
    styles:  'www/assets/styles/',
    scripts: 'www/assets/scripts/',
    views:   'www',
    images:  'www/assets/images/',
    icons:   'www/assets/images/icons/',
    svg:     'www/assets/svg/',
    reports: {
        css: 'reports/css/',
        js: 'reports/js/'
    },
    specs: 'test/',
    host: 'http://localhost/~vitorbritto/' + pkg.name + '/www/'
};


///////////////////////////////////////////
// UTILS                                 //
///////////////////////////////////////////

let joinPath = (prefix, suffix = '') => {
    return path.join(prefix, suffix);
};


///////////////////////////////////////////
// STYLES                                //
///////////////////////////////////////////

// Lint Task
gulp.task('styles:lint', () => {

    let options = {
        reportOutputDir: paths.reports.css,
        reporters: [
            { formatter: 'string', console: true },
            { formatter: 'json', save: 'report.json' }
        ]
    };

    gulp
        .src([
            joinPath(paths.styles, '**/*.scss'),
            '!' + joinPath(paths.styles, 'bootstrap/*.scss')
        ])
        .pipe(stylelint(options));

});

// Compile Task
gulp.task('styles:compile', () => {

    let processors = [
        rucksack({ autoprefixer: true }),
        fontMagician({ hosted: paths.fonts })
    ];

    let options = {
        'errLogToConsole': true,
        'outputStyle': 'expanded'
    };

    gulp
        .src(joinPath(paths.styles, '**/*.scss'))
        .pipe(plumber())
        .pipe(sass(options).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles));

});


///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

// Lint Task
gulp.task('scripts:lint', () => {
    gulp
        .src([
            joinPath(paths.scripts, 'main.js'),
            joinPath(paths.scripts, 'modules/*.js')
        ])
        .pipe(plumber())
        .pipe(eslint('.eslintrc.js'))
        .pipe(eslint.format());
});

// Compile Task
gulp.task('scripts:compile', () => {
    gulp
        .src(joinPath(paths.scripts, 'main.js'))
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(paths.scripts));
});
gulp.task('scripts:vendors', () => {
    gulp
        .src(joinPath(paths.scripts, 'vendors/*.js'))
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(rename('vendors.min.js'))
        .pipe(gulp.dest(joinPath(paths.scripts, 'vendors/')));
});


///////////////////////////////////////////
// ASSETS                                //
///////////////////////////////////////////

gulp.task('images:optimize', () => {

    let options = {
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
        //, use: [pngquant()]
    };

    gulp
        .src(paths.images)
        .pipe(imagemin(options))
        .pipe(gulp.dest(joinPath(paths.images, 'opt')));

});


///////////////////////////////////////////
// DEPLOYS                               //
///////////////////////////////////////////

// Deploy using FTP
gulp.task('deploy:ftp', () => {

    let conn = ftp.create(deploy.ftp);

    gulp.src(deploy.paths, { base: './www', buffer: false })
        .pipe(conn.dest(deploy.ftp.dest));

});

// Deploy using Rsync / SSH
gulp.task('deploy:rsync', () => {
    gulp.src(deploy.paths)
        .pipe(rsync(deploy.rsync));
});


///////////////////////////////////////////
// WATCH AND SYNC                        //
///////////////////////////////////////////

const syncFiles = {
    'script': ['./www/assets/scripts/main.js'],
    'style':  ['./www/assets/styles/**/*.s+(a|c)ss'],
    'image':  ['./www/assets/images/*.{png,jpg,gif}'],
    'view':   ['./www/*.php', './www/includes/**/*.php']
};

const syncOptions = {
    proxy: paths.host
};

// Watch for changes
gulp.task('watch', () => {
    gulp.watch(syncFiles.view,   { debounceDelay: 300 });
    gulp.watch(syncFiles.script, ['scripts']);
    gulp.watch(syncFiles.style,  ['styles']);
    gulp.watch(syncFiles.image,  ['images']);
    gulp.watch(syncFiles.image,  ['icons']);
});

// Start server and Sync files.
gulp.task('browser-sync', () => {
    browserSync.init(syncFiles, syncOptions);
});


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

// Default Task
gulp.task('default', ['build', 'watch', 'browser-sync']);

// Optimize Scripts
gulp.task('scripts', ['scripts:lint', 'scripts:compile']);

// Optimize Styles
gulp.task('styles', ['styles:lint', 'styles:compile']);

// Optimize Images
gulp.task('images', ['images:optimize']);

// Build
gulp.task('build', ['scripts', 'styles']);

// Deploy
gulp.task('deploy', ['deploy:ftp']); // OR use 'deploy:rsync'
