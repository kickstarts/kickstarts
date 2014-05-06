'use strict';

// Requires
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    mocha   = require('gulp-mocha'),
    stylish = require('jshint-stylish'),
    nodemon = require('gulp-nodemon');

// Declare paths for linting
var scripts = [
    '../routes/*.js',
    '../models/*.js',
    '../spec/**/*.js'
];

// JSHint Task
gulp.task('lint', function() {
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

// Nodemon Task
gulp.task('server', function() {
    nodemon({
        script: '../app.js',
        ext: 'html js'
        // ignore: ['ignored.js']
    })
    .on('change', ['lint'])
    .on('restart', function() {
        console.log('restarted!');
    });
});

// Default Task
gulp.task('default', ['watch']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch(scripts, ['lint']);
});
