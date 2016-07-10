/*
 * Copyright 2016, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    mocha   = require('gulp-mocha'),
    stylish = require('jshint-stylish');


// Lint Scripts
gulp.task('jshint', function () {
    gulp.src(['lib/**/*.js', 'test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Run Unit tests
gulp.task('mocha', function () {
    gulp.src('test/*.js')
        .pipe(mocha({
            globals: ['chai'],
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'spec'
        }));
});


// CUSTOMIZE

// Run Unit tests
gulp.task('lint', ['jshint']);

// Run Unit tests
gulp.task('spec', ['mocha']);

// Watch for changes
gulp.task('watch', function () {
    gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint']);
});

// Default Task - Run all
gulp.task('default', ['jshint', 'mocha', 'watch']);
