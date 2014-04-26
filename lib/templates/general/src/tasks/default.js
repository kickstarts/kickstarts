// AVAILABLE PLUGINS
// -----------------
// grunt-concurrent: https://github.com/sindresorhus/grunt-concurrent

module.exports = function(grunt) {

    'use strict';

    grunt.config('concurrent', {

        // OPTIONS
        // target1: ['script', 'styles'],
        // target2: ['jshint', 'test']

    });

    grunt.loadNpmTasks('grunt-concurrent');

};
