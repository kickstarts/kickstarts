
module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('clean', {
        build: config.share.clean
    });

    grunt.config('copy', {
        build: {
            files: [
                {
                    expand: true,
                    src: config.share.copy,
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
