// AVAILABLE PLUGINS
// -----------------

// grunt-contrib-compress: https://github.com/gruntjs/grunt-contrib-compress
// grunt-contrib-copy: https://github.com/gruntjs/grunt-contrib-copy
// grunt-contrib-clean: https://github.com/gruntjs/grunt-contrib-clean

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('clean', {
        build: config.clean
    });

    grunt.config('copy', {
        build: config.copy
    });

    grunt.config('compress', {
        build: config.compress
    });


    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

};
