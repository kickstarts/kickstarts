'use strict';

///////////////////////////////////////////
// CONFIGURATION                         //
///////////////////////////////////////////

var gulp     = require('gulp'),
    loader   = require('require-dir');

// Require all tasks in the 'gulp' folder.
loader('./gulp_modules', { recurse: false });


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

// ----------------------------------------

// Default Task
gulp.task('default', ['serve']);

// ----------------------------------------

// Optimize Scripts
gulp.task('scripts', ['scripts:lint', 'scripts:compile']);

// Optimize Styles
gulp.task('styles', ['styles:lint', 'styles:compile']);

// Optimize Images
gulp.task('images', ['images:optimize']);

// Run Specs
gulp.task('test', ['test:integration']); // OR use 'test:functional'

// Generate Docs
gulp.task('docs', ['docs:js', 'docs:css']);

// Build
gulp.task('build', ['scripts', 'styles']);

// Deploy
gulp.task('deploy', ['deploy:ftp']); // OR use 'deploy:rsync'

// Scaffold
gulp.task('init', ['cmd:bootstrap', 'cmd:vendors', 'cmd:pioneer', 'cmd:backstopjs']);

// ----------------------------------------
