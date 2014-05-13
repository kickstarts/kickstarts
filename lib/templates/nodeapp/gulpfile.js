'use strict';

// --- CONFIG ---------------------------------------------------------------------------

// Requires
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    uglify  = require('gulp-uglify'),
    stylish = require('jshint-stylish'),
    mocha   = require('gulp-mocha'),
    nodemon = require('gulp-nodemon'),
    bsync   = require('browser-sync'),
    config  = require('./config');


// --- TASKS ----------------------------------------------------------------------------

// JSHint Task
gulp.task('lint', function() {
    gulp.src(config.task.lint)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// UglifyJS
gulp.task('minify', function() {
    gulp.src(config.task.minify)
        .pipe(uglify())
        .pipe(gulp.dest(config.task.dist.script));
});

// Script task
gulp.task('script', ['lint', 'minify']);

// Test Task
gulp.task('test', function() {
    gulp.src(config.task.test)
        .pipe(mocha({
            globals: ['chai'],
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'spec'
        }));
});

// Server
gulp.task('nodemon', function() {
    nodemon({
            script: 'app.js',
            ext: 'html js'
        })
        .on('change', ['script', 'sync'])
        .on('restart', function() {
            console.log('restarted!');
        });
});

gulp.task('sync', function() {
    gulp.watch(config.task.sync, function(file) {
        if (file.type === 'changed') {
            bsync.reload(file.path);
        }
    });
});

// Default Task
gulp.task('default', ['nodemon']);
