'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    __     = require('gulp-load-plugins')(),
    sync   = require('browser-sync').create();

///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

// Main Compile
gulp.task('scripts:compile', function() {
    return gulp.src('./www/assets/scripts/main.js')
        .pipe(__.plumber())
        .pipe(__.sourcemaps.init())
        .pipe(__.sourcemaps.write('.'))
        .pipe(__.rename('main.min.js'))
        .pipe(gulp.dest('./www/assets/scripts'))
        .pipe(sync.stream());
});

// Modernizr
gulp.task('scripts:vendors', function() {
    return gulp.src('./www/assets/scripts/vendors/modernizr.min.js')
        .pipe(__.plumber())
        .pipe(__.uglify({
            mangle: false,
            compress: false
        }))
        .pipe(gulp.dest('./www/assets/scripts/vendors/'));
});

// Lint Task
gulp.task('scripts:lint', function () {
    return gulp.src('./www/assets/scripts/main.js')
        .pipe(__.plumber())
        // .pipe(__.cache('eslint'))
        .pipe(__.eslint('.eslintrc'))
        .pipe(__.eslint.format());
});

// gulp.task('scripts:lint', function() {
//     return gulp.src('./www/assets/scripts/main.js')
//         .pipe(__.plumber())
//         .pipe(__.jshint('.jshintrc'))
//         .pipe(__.jshint.reporter(__.stylish));
// });
