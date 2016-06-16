'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    sync   = require('browser-sync').create();

var syncOptions = {
    server: {
        baseDir: './www'
    }
};

var syncFiles = {
    'script': ['./www/assets/scripts/main.js'],
    'style':  ['./www/assets/styles/**/*.scss'],
    'image':  ['./www/assets/images/*.{png,jpg,gif}'],
    'view':   ['./www/*.php', './www/includes/**/*.php']
};

///////////////////////////////////////////
// SERVER AND WATCH                      //
///////////////////////////////////////////

// Start server
gulp.task('serve', ['build'], function() {

    sync.init(syncOptions);

    // Watch for changes.
    gulp.task('watch', function() {
        gulp.watch(syncFiles.view).on('change', sync.reload);
        gulp.watch(syncFiles.script, ['scripts']).on('change', sync.reload);
        gulp.watch(syncFiles.style, ['styles']).on('change', sync.reload);
        gulp.watch(syncFiles.image, ['images']).on('change', sync.reload);
    });

});
