module.exports = function(grunt) {

    'use strict';

    var config = require('../../config/grunt');

    grunt.config('imagemin', {
        dist: config.images
    });

    grunt.config('svgmin', {
        dist: config.svgs
    });

    grunt.config('grunticon', {
        dist: config.icons
    });

};
