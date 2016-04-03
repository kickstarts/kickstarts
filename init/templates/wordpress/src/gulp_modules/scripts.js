'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    __     = require('gulp-load-plugins')(),
    sync   = require('browser-sync').create();

var jspmOptions = {
    selfExecutingBundle: true,
    minify: true
};

///////////////////////////////////////////
// SCRIPTS                               //
///////////////////////////////////////////

// Compile Task
gulp.task('scripts:compile', function() {
    return gulp.src('../assets/scripts/main.js')
        .pipe(__.plumber())
        .pipe(__.sourcemaps.init())
        .pipe(__.jspm(jspmOptions))
        .pipe(__.sourcemaps.write('.'))
        .pipe(__.rename('main.min.js'))
        .pipe(gulp.dest('../assets/scripts'))
        .pipe(sync.stream());
});

// Lint Task
gulp.task('scripts:lint', function () {
    return gulp.src('../assets/scripts/modules/*.js')
        .pipe(__.plumber())
        // .pipe(__.cache('eslint'))
        .pipe(__.eslint('.eslintrc'))
        .pipe(__.eslint.format());
});

// gulp.task('scripts:lint', function() {
//     return gulp.src('../assets/scripts/modules/*.js')
//         .pipe(__.plumber())
//         .pipe(__.jshint('.jshintrc'))
//         .pipe(__.jshint.reporter(__.stylish));
// });
