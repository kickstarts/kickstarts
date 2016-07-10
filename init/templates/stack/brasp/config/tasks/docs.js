module.exports = function(grunt) {

    'use strict';

    var config = require('../../config/grunt');

    grunt.config('jsdoc', {
        dist: config.jsdoc
    });

    grunt.config('styleguide', {
        dist: config.cssdoc
    });

};

