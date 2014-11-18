module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('imagemin', {
        dist: config.images
    });

    grunt.config('svgmin', {
        dist: config.svgs
    });

    grunt.config('grunticon', {
        dist: config.icons
    });

    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-svgmin');
    // grunt.loadNpmTasks('grunt-grunticon');

};
