module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('jshint', {
        dist: config.jslint
    });

    grunt.config('browserify', {
        dist: config.bundle
    });

    grunt.config('uglify', {
        dist: config.minify
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

};
