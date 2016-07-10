module.exports = function(grunt) {

    'use strict';

    var config = require('../../config/grunt');

    grunt.config('jshint', {
        dist: config.jslint
    });

    grunt.config('browserify', {
        dist: config.bundle
    });

    grunt.config('uglify', {
        dist: config.uglify
    });

};
