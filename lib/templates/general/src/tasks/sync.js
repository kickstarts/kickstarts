// AVAILABLE PLUGINS
// -----------------
// grunt-browser-sync: https://www.npmjs.org/package/grunt-browser-sync
// grunt-contrib-watch: https://github.com/gruntjs/grunt-contrib-watch

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('browserSync', {
        dev: {
            bsFiles: {
                src: config.syncFiles
            },
            options: {
                watchTask: true
            }
        }
    });

    grunt.config('watch', {
        options: {
            livereload: true
        },
        css: {
            files: config.src.styles + '/**/*.scss', // *.styl, *.less, *.sass, *.scss
            tasks: 'styles'
        },
        js: {
            files: '<%= jshint.all %>',
            tasks: 'scripts'
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
