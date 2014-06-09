// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compress: https://github.com/gruntjs/grunt-contrib-compress
// grunt-contrib-copy: https://github.com/gruntjs/grunt-contrib-copy
// grunt-contrib-clean: https://github.com/gruntjs/grunt-contrib-clean

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('clean', {
        build: config.share.dist
    });

    grunt.config('copy', {
        build: {
            files: [
                {
                    expand: true,
                    src: config.share.files,
                    dest: config.share.dist
                },
            ]
        }

    });

    grunt.config('compress', {
        build: {
            options: {
                mode: 'zip'
            },
            expand: true,
            cwd: config.share.dist,
            src: ['**/*'],
            dest: config.share.dist
        }
    });


    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

};
