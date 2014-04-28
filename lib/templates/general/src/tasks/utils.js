// AVAILABLE PLUGINS
// -----------------
// grunt-concurrent: https://github.com/gruntjs/grunt-concurrent
// grunt-contrib-compress: https://github.com/gruntjs/grunt-contrib-compress
// grunt-contrib-copy: https://github.com/gruntjs/grunt-contrib-copy
// grunt-contrib-clean: https://github.com/gruntjs/grunt-contrib-clean

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('concurrent', {

        all: {
            tasks: ['browserSync', 'nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }

    });

    grunt.config('clean', {
        build: ['path/to/dir/one', 'path/to/dir/two'],
        release: ['path/to/another/dir/one', 'path/to/another/dir/two']
    });

    grunt.config('compress', {
        release: {
            options: {
                mode: 'gzip'
            },
            expand: true,
            cwd: config.dist.main,
            src: ['**/*'],
            dest: config.dist.main
        }
    });

    grunt.config('copy', {
        main: {
            files: [
                {
                    src: config.src.images + '/*',
                    dest: config.dist.images + '/'
                },
                {
                    src: config.src.fonts + '/*',
                    dest: config.dist.fonts + '/'
                }
            ]
        }

    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

};
