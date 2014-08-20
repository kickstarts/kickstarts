// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compass: https://github.com/gruntjs/grunt-contrib-compass

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('compass', {
        dev: config.compass
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

};

