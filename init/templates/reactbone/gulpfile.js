'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    pkg    = require('./package'),
    config = require('./config/task'),
    __     = require('gulp-load-plugins')();



///////////////////////////////////////////
// SINGLE TASKS                          //
///////////////////////////////////////////


// Start Web Server Task
gulp.task('server', function() {
    return gulp.src('./public')
        .pipe(__.webserver({
            port: 3000,
            livereload: true
        }));
});


// Styles
// ---------------------

// Stylus Task
gulp.task('stylus', function() {
    return gulp.src(config.task.compilecss)
        .pipe(__.plumber())
        .pipe(__.stylus({
            compress: false
        }))
        .pipe(gulp.dest(config.paths.style));
});

// CSS Lint
gulp.task('csslint', function() {
    return gulp.src(config.task.cssmin)
        .pipe(__.plumber())
        .pipe(__.csslint('.csslint.json'))
        .pipe(__.csslint.reporter());
});

// CSS Comb
gulp.task('csscomb', function() {
    return gulp.src(config.task.cssmin)
        .pipe(__.plumber())
        .pipe(__.csscomb('.csscomb.json'))
        .pipe(gulp.dest(config.paths.style));
});

// CSS Minify
gulp.task('cssmin', function () {
    return gulp.src(config.task.cssmin)
        .pipe(__.cssmin())
        .pipe(__.rename({suffix: '.min'}))
        .pipe(gulp.dest(config.paths.style));
});

// Scripts
// ---------------------

// Bundle Script Task
gulp.task('bundle', function() {
    __.browserify(config.task.bundle)
    .bundle()
    .on('error', __.gutil.log)
    .pipe(source(config.task.jsmin))
    .pipe(gulp.dest(config.paths.script));
});

gulp.task('minify', function() {
    return gulp.src(config.paths.script + '/' + config.task.jsmin)
        .pipe(__.plumber())
        .pipe(__.rename({suffix: '.min'}))
        .pipe(__.uglify({
            mangle: false,
            compress: false
        }))
        .on('error', __.gutil.log)
        .pipe(__.header(config.banner, { pkg : pkg }))
        .pipe(gulp.dest(config.paths.script));
});

// Mocha Task
gulp.task('mocha', function() {
    return gulp.src(config.mocha)
        .pipe(__.mocha({
            timeout: 6000,
            ignoreLeaks: false,
            // ui: 'bdd',
            reporter: 'nyan'
        }));
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
        .pipe(gulp.dest(config.paths.images));
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
gulp.task('scripts', ['jshint', 'bundle', 'minify']);
// Optimize Styles
gulp.task('styles', ['stylus', 'csslint', 'csscomb', 'cssmin']);

// Optimize Images
gulp.task('images', ['imagemin']);

// Run Specs
gulp.task('test', ['mocha']);

// Build Task
gulp.task('build', ['scripts', 'styles', 'images', 'generate']);

// Watch Task
gulp.task('default', ['scripts', 'styles', 'images', 'server'], function() {
    gulp.watch(config.watch.css, ['styles']);
    gulp.watch(config.watch.js, ['scripts']);
    gulp.watch(config.watch.imgs, ['images']);
    gulp.watch(config.watch.html);
});
