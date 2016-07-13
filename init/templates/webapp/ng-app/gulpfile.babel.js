'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

// Main
import gulp from 'gulp';

// Utils
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

// Styles
import stylus from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import ngsort from 'gulp-angular-filesort';

// Scripts
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// Deploy
import rsync from 'gulp-rsync';
import ftp from 'vinyl-ftp';

// PostCSS
// import postcss from 'gulp-postcss';
import poststylus from 'poststylus';
import rucksack from 'rucksack-css';
import fontMagician from 'postcss-font-magician';
import gcmq from 'gulp-group-css-media-queries';
import cssnano from 'gulp-cssnano';

// Accessibility
import a11y from 'gulp-a11y';


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
    'root':        './build',
    'hostname':    'ftp.domain.com.br',
    'destination': './public_html'
  },
  'paths': ['build/**/*']
};

const paths = {
  styles:  'styl',
  scripts: 'app',
  specs:   'test',
  libs:    'www/lib',
  reports: {
    css: 'reports/css/',
    js:  'reports/js/'
  }
};


///////////////////////////////////////////
// STYLES                                //
///////////////////////////////////////////

gulp.task('styles', () => {

  let options = {
    use: [
      poststylus([
        fontMagician({
          hosted: paths.fonts
        }),
        rucksack({
          autoprefixer: true
        })
      ])
    ],
    compress: false
  };

  gulp
    .src(`${paths.styles}/**/*.scss`)
    .pipe(plumber())
    .pipe(stylus(options))
    .pipe(sourcemaps.init())
    // .pipe(postcss(processors))
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/css/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./www/css/'));

});


///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

// Lint Task
gulp.task('scripts:lint', () => {
  gulp
    .src(`${paths.scripts}/**/*.js`)
    .pipe(plumber())
    .pipe(eslint('.eslintrc.js'))
    .pipe(eslint.format());
});

// Compile Task
gulp.task('scripts:app', () => {
  gulp
    .src(`${paths.scripts}/app.js`)
    .pipe(plumber())
    .pipe(ngsort())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('scripts:ng', () => {
  gulp
    .src(`${paths.libs}/angular/*.js`)
    .pipe(plumber())
    .pipe(ngsort())
    .pipe(concat('angular.bundle.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('angular.bundle.min.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('scripts:bs', () => {
  gulp
    .src(`${paths.libs}/bootstrap/*.js`)
    .pipe(plumber())
    .pipe(ngsort())
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('bootstrap.min.js'))
    .pipe(gulp.dest('./www/js/'));
});


///////////////////////////////////////////
// BUILD                                 //
///////////////////////////////////////////

gulp.task('build:html', () => {
  gulp
    .src('www/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('../build/'));
});

gulp.task('build:img', () => {
  gulp
    .src('www/img/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('../build/img/'));
});

gulp.task('build:fonts', () => {
  gulp
    .src('www/fonts/*')
    .pipe(plumber())
    .pipe(gulp.dest('../build/fonts/'));
});

gulp.task('build:css', () => {
  gulp
    .src('www/css/main.min.css')
    .pipe(plumber())
    .pipe(gulp.dest('../build/css/'));
});

gulp.task('build:js', () => {
  gulp
    .src([
      'www/js/angular.bundle.js',
      'www/js/bootstrap.js',
      'www/js/app.js'
    ])
    .pipe(plumber())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../build/js/'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('../build/'));
});


///////////////////////////////////////////
// ACCESSIBILITY                         //
///////////////////////////////////////////

gulp.task('audit', () => {
  gulp
    .src('./**/*.html')
    .pipe(a11y())
    .pipe(a11y.reporter());
});


///////////////////////////////////////////
// DEPLOY                                //
///////////////////////////////////////////

// Deploy using FTP
gulp.task('deploy:ftp', () => {

  let conn = ftp.create(deploy.ftp);

  gulp
    .src(deploy.paths, {
      base: './build',
      buffer: false
    })
    .pipe(conn.dest(deploy.ftp.dest));

});

// Deploy using Rsync / SSH
gulp.task('deploy:rsync', () => {
  gulp
    .src(deploy.paths)
    .pipe(rsync(deploy.rsync));
});


///////////////////////////////////////////
// WATCH AND SYNC                        //
///////////////////////////////////////////

// Watch for changes
gulp.task('watch', () => {

  let fsync = {
    'script': ['app/**/*.js'],
    'style':  ['styl/**/*.styl'],
    'view':   ['www/index.html']
  };

  gulp.watch(fsync.view, { debounceDelay: 300 });
  gulp.watch(fsync.script, ['js']);
  gulp.watch(fsync.style, ['css']);

});

// Start server and Sync files.
gulp.task('sync', () => {
  browserSync.init('www/**/*', {
    server: {
      baseDir: './www/'
    }
  });
});


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

// Default Task
gulp.task('default', ['compile', 'watch', 'sync']);

// Scripts
gulp.task('js', ['scripts:lint', 'scripts:app', 'scripts:ng', 'scripts:bs']);

// Styles
gulp.task('css', ['styles']);

// Compile
gulp.task('compile', ['js', 'css']);

// Build
gulp.task('build', ['build:js', 'build:css', 'build:img', 'build:html']);

// Deploy
gulp.task('deploy', ['build', 'deploy:ftp']); // OR use 'deploy:rsync'
