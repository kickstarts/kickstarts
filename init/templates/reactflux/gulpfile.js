/* jshint -W117 */

'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp     = require('gulp'),
    pkg      = require('./package'),
    config   = require('./config/task'),
    bundle   = require('browserify'),
    source   = require('vinyl-source-stream'),
    reactify = require('reactify'),
    nib      = require('nib'),
    sync     = require('browser-sync'),
    reload   = sync.reload,
    __       = require('gulp-load-plugins')();


///////////////////////////////////////////
// SINGLE TASKS                          //
///////////////////////////////////////////


// Web Server & Reload
// ---------------------

// Sync Task
gulp.task('server', function() {
    sync(config.sync, function (err) {
        if (!err) {
            console.log('BrowserSync is ready!');
        }
    });
});


// Scripts
// ---------------------

// Bundle Script Task
gulp.task('bundle', function() {
    bundle({
        insertGlobals: true,
        entries: config.task.bundle,
        transform: ['reactify'],
        extensions: ['.jsx']
    })
    .bundle()
    .pipe(source(config.task.jsmin))
    .pipe(gulp.dest(config.paths.script))
    .pipe(__.notify('Script successfully bundled!'));
});

gulp.task('minify', function() {
    return gulp.src(config.paths.script + '/' + config.task.jsmin)
        .pipe(__.plumber())
        .pipe(__.rename({suffix: '.min'}))
        .pipe(__.uglify({
            mangle: false,
            compress: true
        }))

        .pipe(__.header(config.banner, { pkg : pkg }))
        .pipe(gulp.dest(config.paths.script))
        .pipe(__.notify('Script successfully minified!'));
});


// Styles
// ---------------------

// Stylus Task
gulp.task('stylus', function() {
    return gulp.src(config.task.stylus)
        .pipe(__.plumber())
        .pipe(__.changed(config.task.stylus))
        .pipe(__.stylus({
            compress: false,
            use: nib()
        }))
        .pipe(gulp.dest(config.paths.style))
        .pipe(__.notify('CSS successfully compiled!'));
});

// CSS Lint
gulp.task('csslint', function() {
    return gulp.src(config.task.cssmin)
        .pipe(__.plumber())
        .pipe(__.csslint('.csslint.json'))
        .pipe(__.csslint.reporter())
        .pipe(__.notify('CSS successfully linted!'));
});

// CSS Comb
gulp.task('csscomb', function() {
    return gulp.src(config.task.cssmin)
        .pipe(__.plumber())
        .pipe(__.csscomb('.csscomb.json'))
        .pipe(gulp.dest(config.paths.style))
        .pipe(__.notify('CSS successfully organizied!'));
});

// CSS Minify
gulp.task('cssmin', function () {
    return gulp.src(config.task.cssmin)
        .pipe(__.cssmin())
        .pipe(__.rename({suffix: '.min'}))
        .pipe(gulp.dest(config.paths.style))
        .pipe(__.notify('CSS successfully minified!'));
});


// Unit Test
// ---------------------

// Jest Task
gulp.task('jest', function() {
    return gulp.src(config.paths.test)
        .pipe(__.plumber())
        .pipe(__.jest(config.task.jest))
        .pipe(__.notify('Test has finished!'));
});


// Production
// ---------------------

// Image Minify Task
gulp.task('imagemin', function() {
    return gulp.src(config.paths.images)
        .pipe(__.plumber())
        .pipe(__.changed(config.task.images))
        .pipe(__.imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.paths.images))
        .pipe(__.notify('Images successfully minified!'));
});

// Prepare Files (Copy and Zip)
gulp.task('generate', __.shell.task([
    config.shell.create,
    config.shell.copy.html,
    config.shell.copy.txt,
    config.shell.copy.xml,
    config.shell.copy.md,
    config.shell.copy.css,
    config.shell.copy.js,
    config.shell.copy.imgs,
    config.shell.gzip
]));


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

// Optimize Scripts
gulp.task('scripts', ['bundle', 'minify']);
// Optimize Styles
gulp.task('styles', ['stylus', 'csslint', 'csscomb', 'cssmin']);

// Optimize Images
gulp.task('images', ['imagemin']);

// Run Specs
gulp.task('test', ['mocha']);

// Build Task
gulp.task('build', ['scripts', 'styles', 'images', 'generate']);

// Watch Task
gulp.task('default', ['server', 'scripts', 'styles', 'images'], function() {
    gulp.watch(config.watch.css, ['styles', reload]);
    gulp.watch(config.watch.js, ['scripts', reload]);
    gulp.watch(config.watch.imgs, ['images', reload]);
    gulp.watch(config.watch.html, reload);
});
