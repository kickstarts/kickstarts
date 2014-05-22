// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-htmlmin: https://github.com/gruntjs/grunt-contrib-htmlmin

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('htmlmin', {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: config.src.main,
                dest: config.dist.main
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
