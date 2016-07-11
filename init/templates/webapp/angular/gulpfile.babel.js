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
import stylus from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import ngsort from 'gulp-angular-filesort';

// Scripts
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// Assets
import imagemin from 'gulp-imagemin';

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
    'root':        './www',
    'hostname':    'ftp.domain.com.br',
    'destination': './public_html'
  },
  'paths': ['www/**/*']
};

const paths = {
  styles:  'styl/',
  scripts: 'app/',
  specs:   'test/',
  reports: {
    css: 'reports/css/',
    js:  'reports/js/'
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
    .src(joinPath(paths.styles, '**/*.styl'))
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
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('scripts:ng', () => {
  gulp
    .src('./www/lib/angular/*.js')
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
    .src('./www/lib/bootstrap/*.js')
    .pipe(plumber())
    .pipe(ngsort())
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename('bootstrap.min.js'))
    .pipe(gulp.dest('./www/js/'));
});


///////////////////////////////////////////
// ASSETS                                //
///////////////////////////////////////////

gulp.task('images:optimize', () => {

  let options = {
    optimizationLevel: 3,
    progressive:       true,
    interlaced:        true
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

  gulp
    .src(deploy.paths, {
      base: './www',
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
gulp.task('default', ['build', 'watch', 'sync']);

// Optimize Scripts
gulp.task('js', ['scripts:lint', 'scripts:app', 'scripts:ng', 'scripts:bs']);

// Optimize Styles
gulp.task('css', ['styles']);

// Optimize Images
gulp.task('images', ['images:optimize']);

// Build
gulp.task('build', ['js', 'css']);

// Deploy
gulp.task('deploy', ['deploy:ftp']); // OR use 'deploy:rsync'
