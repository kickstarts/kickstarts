'use strict';

// Requires
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    mocha   = require('gulp-mocha'),
    stylish = require('jshint-stylish');

// Declare paths for linting
var scripts = [
    '../routes/*.js',
    '../models/*.js',
    '../spec/**/*.js'
];

// JSHint Task
gulp.task('jshint', function() {
    gulp.src(scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Mocha Task
gulp.task('mocha', function() {
    gulp.src('../spec/**/*.js')
        .pipe(mocha({
            globals: ['chai'],
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'spec'
        }));
});

// Default Task
gulp.task('default', ['watch']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch(scripts, ['jshint']);
});
