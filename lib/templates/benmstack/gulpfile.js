'use strict';

///////////////////////////////////////////
// CONFIGURATION                         //
///////////////////////////////////////////

var gulp   = require('gulp'),
    pkg    = require('./package'),
    config = require('./config/build'),
    __     = require('gulp-load-plugins')();



///////////////////////////////////////////
// SINGLE TASKS                          //
///////////////////////////////////////////

// JSHint Task
gulp.task('lint', function() {
    gulp.src(config.task.lint)
        .pipe(__.jshint('.jshintrc'))
        .pipe(__.jshint.reporter(__.stylish));
});

// UglifyJS Task
gulp.task('minify', function() {
    gulp.src(config.task.minify)
        .pipe(__.uglify()
            .on('error', config.messages.fail())
        )
        .pipe(__.header(config.task.banner, { pkg : pkg } ))
        .pipe(gulp.dest(config.path.dist.script));
});

// Mocha Task
gulp.task('mocha', function() {
    gulp.src(config.task.test)
        .pipe(__.mocha({
            timeout: 6000,
            ignoreLeaks: false,
            ui: 'bdd',
            reporter: 'nyan'
        }));
});

// Browserify Task
gulp.task('browserify', function() {
    gulp.src(config.task.bundle)
        .pipe(__.browserify( {
            insertGlobals : true,
            debug : true,
            shim: config.task.shims
        }))
        .on('error', config.messages.fail())
        .pipe(gulp.dest('./public/assets/scripts'));
});

// Imagemin Task
gulp.task('images', function() {
    gulp.src(config.task.imagemin)                   // Read images
        .pipe(__.changed(config.path.dist.images))   // Only process new/changed
        .pipe(__.imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .on('error', config.messages.fail())
        .pipe(gulp.dest(config.path.dist.images));
});

// Clean Task
gulp.task('clean', function() {
    gulp.src(config.task.clean, {read: false})
        .on('error', config.messages.fail())
        .pipe(__.clean());
});



///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

// Process Script
gulp.task('scripts', ['lint', 'minify']);

// Process Specs
gulp.task('test', ['mocha']);

// Default Task
gulp.task('default', ['build', 'serve']);

// Build Task
gulp.task('build', ['scripts', 'images', 'test']);

// Serve Task
gulp.task('serve', ['watch'], function() {
    __.nodemon(config.task.nodemon)
        .on('change', ['scripts'])
        .on('restart', function() {
            console.log('✓ Restarted!'.green.bold);
        });
});



///////////////////////////////////////////
// WATCH FILES                           //
///////////////////////////////////////////

gulp.task('watch', function() {

    // Watch client .js files, process/reload as needed
    gulp.watch(config.task.minify, ['scripts']);

    // Watch .jade files, reload as needed
    gulp.watch(config.task.watch).on('change', function (file) {
        __.livereload().changed(file.path);
    });

});
