'use strict';

///////////////////////////////////////////
//                                       //
// DEPENDENCIES                          //
//                                       //
///////////////////////////////////////////

'use strict';

// Main
const gulp        = require('gulp');
const pkg         = require('./package');

// Utils
const fs          = require('fs');
const argv        = require('yargs').argv;
const del         = require('del');
const plumber     = require('gulp-plumber');
const gutil       = require('gulp-util');
const rename      = require('gulp-rename');
const browserSync = require('browser-sync');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const run         = require('run-sequence');

// Styles
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const cssnano     = require('gulp-cssnano');
const gcmq        = require('gulp-group-css-media-queries');
// const postcss     = require('gulp-postcss');
// const rucksack    = require('rucksack-css');
// const fontmagic   = require('postcss-font-magician');

// Scripts
const eslint      = require('gulp-eslint');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserify  = require('browserify');

// Assets
const imagemin    = require('gulp-imagemin');
const svgmin      = require('gulp-svgmin');
const svgstore    = require('gulp-svgstore');

// Deploy
const rsync       = require('gulp-rsync');
const ftp         = require('vinyl-ftp');

// Accessibility
const a11y        = require('gulp-a11y');

// i18n
const potomo      = require('gulp-potomo');
const makepot     = require('gulp-wp-pot');
const sort        = require('gulp-sort');



///////////////////////////////////////////
//                                       //
// CONFIGURATION                         //
//                                       //
///////////////////////////////////////////

const HOST = '127.0.0.1:8080';
const ENV  = process.env.NODE_ENV || 'dev';

const isLocal      = ( argv.local === undefined ) ? false : true;
const isDev        = ( argv.dev === undefined ) ? false : true;
const isStaging    = ( argv.staging === undefined ) ? false : true;
const isProduction = ( argv.production === undefined ) ? false : true;

const paths = {
  styles: 'assets/styles',
  scripts: 'assets/scripts',
  images: 'assets/images',
  icons: 'assets/images/icons',
  svg: 'assets/svg'
};

const deploy = {
  'ftp': {
    'host': 'ftp.domain.com.br',
    'user': '',
    'password': '',
    'parallel': 10,
    'dest': './public_html',
    'log': gutil.log
  },
  'rsync': {
    'root': './',
    'hostname': 'ftp.domain.com.br',
    'destination': './public_html'
  },
  'paths': [
    'assets/fonts/*',
    'assets/images/**/*',
    'assets/scripts/main.min.js',
    'assets/styles/main.min.css',
    'includes/*.php',
    'partials/*.php',
    'core/**/*.php',
    '*.{php,html,md,txt}'
  ]
};



///////////////////////////////////////////
//                                       //
// TASKS                                 //
//                                       //
///////////////////////////////////////////

///////////////////////////////////////////
// LIST OF TASKS:
// - STYLES
// - SCRIPTS
// - ASSETS
// - DEPLOY
// - A11Y
// - I18N
///////////////////////////////////////////


///////////////////////////////////////////
// STYLES                                //
///////////////////////////////////////////

gulp.task('styles', () => {
  const options = {
    'errLogToConsole': true,
    'outputStyle': 'expanded'
  };

  return gulp
    .src(`${paths.styles}/**/*.scss`)
    .pipe(plumber())
    .pipe(sass(options).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles));

});


///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

gulp.task('scripts', () => {
  const b = browserify({
    entries: `${paths.scripts}/main.js`,
    debug: true
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts));
});



gulp.task('libs', () => {
  return gulp
    .src(`${paths.scripts}/libs/*.js`)
    .pipe(plumber())
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${paths.scripts}/libs/`));
});

gulp.task('vendors', () => {
  return gulp
    .src(`${paths.scripts}/vendors/*.js`)
    .pipe(plumber())
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${paths.scripts}/vendors/`));
});


///////////////////////////////////////////
// ASSETS                                //
///////////////////////////////////////////

gulp.task('images', () => {
  return gulp
    .src(paths.images)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(paths.images));
});

gulp.task('svg', () => {
  return gulp
    .src(paths.svg)
    .pipe(svgmin())
    .pipe(gulp.dest(paths.svg));
});

gulp.task('icons', () => {
  return gulp
    .src(paths.icons)
    .pipe(plumber())
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
    // .pipe(cheerio({
    //   run: function ($, file) {
    //     $('svg').addClass('hide');
    //     $('[fill]').removeAttr('fill');
    //   },
    //   parserOptions: { xmlMode: true }
    // }))
    .pipe(gulp.dest(paths.svg));
});


///////////////////////////////////////////
// ACCESSIBILITY                         //
///////////////////////////////////////////

gulp.task('audit', () => {
  return gulp
    .src('./**/*.html')
    .pipe(a11y())
    .pipe(a11y.reporter());
});


///////////////////////////////////////////
// TRANSLATION                           //
///////////////////////////////////////////

gulp.task('i18n:pototmo', () => {
  return gulp
    .src(`${paths.locales}/*.po`)
    .pipe(potomo())
    .pipe(gulp.dest(paths.locales));
});

gulp.task('i18n:makepot', () => {

  let options = {
    destFile: `${pkg.name}.pot`,
    package: pkg.name,
    bugReport: pkg.author.url,
    lastTranslator: `${pkg.author.name}<${pkg.author.email}>`,
    team: `${pkg.author.name}<${pkg.author.email}>`
  };

  return gulp
    .src('../**/*.php')
    .pipe(sort())
    .pipe(makepot(options))
    .pipe(gulp.dest(paths.locales));

});


///////////////////////////////////////////
// DEPLOYS                               //
///////////////////////////////////////////

// Deploy using FTP
gulp.task('deploy:ftp', () => {
  let conn = ftp.create(deploy.ftp);

  return gulp
    .src(deploy.paths, {
      base: './',
      buffer: false
    })
    .pipe(conn.dest(deploy.ftp.dest));
});

// Deploy using Rsync / SSH
gulp.task('deploy:rsync', () => {
  return gulp
    .src(deploy.paths)
    .pipe(rsync(deploy.rsync));
});


///////////////////////////////////////////
// WATCH AND SYNC                        //
///////////////////////////////////////////

const syncFiles = {
  'script' : ['assets/scripts/main.js'],
  'style'  : ['assets/styles/**/*.{sass,scss}'],
  'image'  : ['assets/images/*.{png,jpg}'],
  'icons'  : ['assets/images/icons/*'],
  'view'   : ['**/*.php']
};

// Watch for changes
gulp.task('watch', () => {
  gulp.watch(syncFiles.view,   { debounceDelay: 300 });
  gulp.watch(syncFiles.script, ['scripts']);
  gulp.watch(syncFiles.style,  ['styles']);
  gulp.watch(syncFiles.image,  ['images']);
  gulp.watch(syncFiles.icons,  ['icons']);
});


// Start server and Sync files.
gulp.task('sync', () => {
  browserSync.init(syncFiles, {
    proxy  : `${HOST}`,
    open   : true,
    notify : true
  });
});


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

gulp.task('default', () => { run('build', 'watch', 'sync'); });
gulp.task('serve', () => { run('build', 'watch', 'sync'); });
gulp.task('start', () => { run('vendors', 'libs', 'serve'); });
gulp.task('build', () => { run('scripts', 'styles', 'images'); });

gulp.task('i18n', ['i18n:makepot', 'i18n:potomo']);
gulp.task('deploy', ['deploy:ftp']); // OR use 'deploy:rsync'
