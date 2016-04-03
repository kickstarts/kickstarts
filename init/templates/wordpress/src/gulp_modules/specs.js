'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    __     = require('gulp-load-plugins')();

var dalekOptions = {
    browser: ['phantomjs', 'chrome', 'chrome:canary'],
    reporter: ['html', 'junit']
};

var specs = {
    'features':    '../tests/features',
    'fixtures':    '../tests/fixtures',
    'functional':  '../tests/functional',
    'steps':       '../tests/steps',
    'widgets':     '../tests/widgets',
    'performance': '../tests/performance'
};

///////////////////////////////////////////
// SPECS                                 //
///////////////////////////////////////////

// Run Integration Test - Using Pioneer
gulp.task('test:integration', __.shell.task('./node_modules/.bin/pioneer'));


// Run E2E Test - Using DalekJS
gulp.task('test:functional', function() {
  return gulp.src([specs.functional])
    .pipe(__.dalek(dalekOptions));
});
