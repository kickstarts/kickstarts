module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('stylus', {

        build: {
            options: {
                use: [ require('nib') ],
                compress: true
            },
            files: {
                src:  config.stylus,
                dest: config.path.style + '/style.min.css'
            }
        }

    });

    grunt.config('csslint', {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: {
            options: {
                import: 2
            },
            src: config.path.style + '/style.min.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-csslint');

};

