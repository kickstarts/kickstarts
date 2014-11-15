module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('sass', {
        dist: config.sass
    });

    grunt.config('csscomb', {
        dist: config.csscomb
    });

    grunt.config('csslint', {
        dist: config.csslint
    });

    grunt.config('cssmin', {
        dist: config.cssmin
    });


    // grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-csslint');

};

