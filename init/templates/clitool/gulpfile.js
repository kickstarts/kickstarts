/*
 * Copyright 2018, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

const gulp  = require('gulp'),
const mocha = require('gulp-mocha'),


// Lint Scripts


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
gulp.task('lint', ['eslint']);

// Run Unit tests
gulp.task('spec', ['mocha']);

// Watch for changes
gulp.task('watch', function () {
    gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint']);
});

// Default Task - Run all
gulp.task('default', ['eslint', 'mocha', 'watch']);
