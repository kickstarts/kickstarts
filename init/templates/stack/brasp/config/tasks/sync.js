module.exports = function(grunt) {

    'use strict';

    var config = require('../../config/grunt');

    grunt.config('watch', config.watch);

    grunt.config('browserSync', {
        dev: config.sync
    });

};
