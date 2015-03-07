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

};
