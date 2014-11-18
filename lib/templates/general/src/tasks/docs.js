module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('jsdoc', {
        dist: config.jsdoc
    });

    grunt.config('styleguide', {
        dist: config.cssdoc
    });

    // grunt.loadNpmTasks('grunt-jsdoc');
    // grunt.loadNpmTasks('grunt-styleguide');

};

