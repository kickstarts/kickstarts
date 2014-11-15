module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('sass', {
        dist: config.sass
    });

    grunt.config('csslint', {
        dist: config.csslint
    });

    // grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-csslint');

};

