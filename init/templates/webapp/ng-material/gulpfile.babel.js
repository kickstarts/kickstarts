'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

// Main
import path from 'path';
import gulp from 'gulp';

// Utils
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

// Styles
import sass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import sourcemaps from 'gulp-sourcemaps';
import ngsort from 'gulp-angular-filesort';
import gcmq from 'gulp-group-css-media-queries';
import cssnano from 'gulp-cssnano';

// Scripts
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// Deploy
import rsync from 'gulp-rsync';
import ftp from 'vinyl-ftp';


///////////////////////////////////////////
// CONFIGURATION                         //
///////////////////////////////////////////

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
    'root': './build',
    'hostname': 'ftp.domain.com.br',
    'destination': './public_html'
  },
  'paths': ['build/**/*']
};

const paths = {
  styles: 'scss/',
  scripts: 'app/',
  specs: 'test/',
  reports: {
    css: 'reports/css/',
    js: 'reports/js/'
  }
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
    reporters: [{
      formatter: 'string',
      console: true
    }, {
      formatter: 'json',
      save: 'report.json'
    }]
  };

  gulp
    .src([
      joinPath(paths.styles, '*.scss'),
      '!' + joinPath(paths.styles, 'angular-material.scss')
    ])
    .pipe(stylelint(options));

});

// Compile Task
gulp.task('styles:app', () => {

  let options = {
    'errLogToConsole': true,
    'outputStyle': 'expanded'
  };

  gulp
    .src(joinPath(paths.styles, '*.scss'))
    .pipe(plumber())
    .pipe(sass(options).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles));

});


///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

// Lint Task
gulp.task('scripts:lint', () => {
  gulp
    .src([joinPath(paths.scripts, '**/*.js')])
    .pipe(plumber())
    .pipe(eslint('.eslintrc.js'))
    .pipe(eslint.format());
});

// Compile Task
gulp.task('scripts:app', () => {
  gulp
    .src(joinPath(paths.scripts, 'app.js'))
    .pipe(plumber())
    .pipe(ngsort())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('scripts:libs', () => {

  let vendors = [
    'www/lib/angular.js',
    'www/lib/angular-aria.js',
    'www/lib/angular-animate.js',
    'www/lib/angular-message.js',
    'www/lib/angular-ui-router.js',
    'www/lib/angular-resource.js',
    'www/lib/angular-sanitize.js',
    'www/lib/angular-material.js'
  ];

  gulp
    .src(vendors)
    .pipe(plumber())
    .pipe(concat('angular.bundle.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('angular.bundle.min.js'))
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
    'style': ['scss/*.scss'],
    'view': ['www/index.html']
  };

  gulp.watch(fsync.view, {
    debounceDelay: 300
  });
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
gulp.task('js', ['scripts:lint', 'scripts:app', 'scripts:libs']);

// Styles
gulp.task('css', ['styles:lint', 'styles:app']);

// Compile
gulp.task('compile', ['js', 'css']);

// Build
gulp.task('build', ['build:js', 'build:css', 'build:img', 'build:html']);

// Deploy
gulp.task('deploy', ['build', 'deploy:ftp']); // OR use 'deploy:rsync'
