// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compress: https://github.com/gruntjs/grunt-contrib-compress
// grunt-contrib-copy: https://github.com/gruntjs/grunt-contrib-copy
// grunt-contrib-clean: https://github.com/gruntjs/grunt-contrib-clean

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.utils) {

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
                src: config.src.main,
                dest: config.dist.main
            }
        });

        grunt.loadNpmTasks('grunt-contrib-compress');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-clean');

    }

};
