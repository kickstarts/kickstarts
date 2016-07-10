module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('browserify', {
        build: config.browserify
    });

    grunt.config('uglify', {
        build: config.uglify
    });

    grunt.config('jshint', {
        build: config.jshint
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};
