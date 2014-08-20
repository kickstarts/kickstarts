// AVAILABLE PLUGINS
// -----------------

// grunt-contrib-jshint: https://github.com/gruntjs/grunt-contrib-jshint
// grunt-contrib-uglify: https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('uglify', {
        dev: config.minify
    });

    grunt.config('jshint', {
        dev: config.lint
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
