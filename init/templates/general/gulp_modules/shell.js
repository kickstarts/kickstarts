'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    __     = require('gulp-load-plugins')();


///////////////////////////////////////////
// SHELL COMMANDS                        //
///////////////////////////////////////////


// Tests
// -----------------------

// Scaffold Structure - Pioneer
gulp.task('cmd:pioneer', __.shell.task([
  './node_modules/.bin/pioneer --scaffold'
]));

// Generate config file - BackStopJS
gulp.task('cmd:backstopjs', __.shell.task([
  'cd ./node_modules/backstopjs && gulp genConfig',
  'cd ./node_modules/backstopjs && gulp reference'
]));

// Documentation
// -----------------------

// Generate ESDocs
gulp.task('docs:js', __.shell.task([
  'esdoc -c .esdoc.json'
]));

// Generate SassDocs
gulp.task('docs:css', __.shell.task([
  'sassdoc ../assets/styles'
]));

// Bootstrap Project
// -----------------------

// Stylesheet
gulp.task('cmd:bootstrap', __.shell.task(['bash ./bin/bootstrap.sh']));

// Scripts
gulp.task('cmd:vendors', __.shell.task(['bash ./bin/vendors.sh']));
