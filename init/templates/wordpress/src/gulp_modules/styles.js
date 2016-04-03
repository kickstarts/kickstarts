'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    __     = require('gulp-load-plugins')(),
    sync   = require('browser-sync').create();

var sassOptions = {
    'errLogToConsole': true,
    'outputStyle': 'expanded'
};

///////////////////////////////////////////
// STYLES                                //
///////////////////////////////////////////

// Lint Task
gulp.task('styles:lint', function() {
    return gulp.src('../assets/styles/**/*.scss')
        .pipe(__.sassLint())
        .pipe(__.sassLint.format());
});


// Compile Task
gulp.task('styles:compile', function() {
    return gulp.src('../assets/styles/**/*.scss')
        .pipe(__.plumber())
        .pipe(__.sass(sassOptions).on('error', __.sass.logError))
        .pipe(__.sourcemaps.init())
        .pipe(__.cssnano())
        .pipe(__.sourcemaps.write('.'))
        .pipe(__.rename({suffix: '.min'}))
        .pipe(gulp.dest('../assets/styles'))
        .pipe(sync.stream());
});
