module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('nodemon', {
        dev: {
            script: config.nodemon.script,
            options: {
                cwd: __dirname,
                ignore: config.nodemon.ignore,
                ext: config.nodemon.ext,
                env: {
                    PORT: '3000'
                }
            }
        }
    });

    grunt.config('watch', {
        options: {
            livereload: true
        },
        styles: {
            files: config.watch.styles,
            tasks: ['csslint', 'stylus']
        },
        scripts: {
            files: config.watch.scripts,
            tasks: ['jshint', 'browserify', 'uglify']
        },
        views: {
            files: config.watch.views
        }
    });

    grunt.config('concurrent', {
        tasks: ['nodemon:dev', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

};
