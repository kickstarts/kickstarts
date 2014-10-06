module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('compass', {
        dist: config.compass
    });

    grunt.config('csslint', {
        dist: config.csslint
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');

};

