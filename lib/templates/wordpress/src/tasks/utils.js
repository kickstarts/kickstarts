// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compress: https://github.com/gruntjs/grunt-contrib-compress
// grunt-contrib-copy: https://github.com/gruntjs/grunt-contrib-copy
// grunt-contrib-clean: https://github.com/gruntjs/grunt-contrib-clean

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('clean', {
        build: '../_build/'
    });

    grunt.config('copy', {
        build: {
            files: [] // Todos os arquivos, exceto "node_modules", ".sass-cache" e "components"
        }

    });

    grunt.config('compress', {
        build: {
            options: {
                mode: 'zip'
            },
            expand: true,
            cwd: config.dist.main,
            src: ['**/*'],
            dest: config.dist.main // package-name-vX.X.X.zip
        }
    });


    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

};
