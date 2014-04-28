// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compass: https://github.com/gruntjs/grunt-contrib-compass
// grunt-contrib-stylus: https://github.com/gruntjs/grunt-contrib-stylus
// grunt-contrib-less: https://github.com/gruntjs/grunt-contrib-less
// grunt-contrib-ccslint: https://github.com/gruntjs/grunt-contrib-ccslint
// grunt-contrib-cssmin: https://github.com/gruntjs/grunt-contrib-cssmin

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.style !== 'none') {

        grunt.config(config.init.style, {

            // Choose your CSS preprocessor

            // STYLUS
            compile: {
                options: {
                    // use: [ require('nib') ],
                    compress: true
                },
                files: {
                    src:  config.src.styles + '/style.styl',
                    dest: config.dist.styles + '/style.css'
                }
            }

            // COMPASS
            // compile: {
            //     options: {
            //         force: true,
            //         banner: config.banner,
            //         sassDir: config.src.styles,
            //         cssDir: config.dist.styles,
            //         javascriptsDir: config.src.scripts,
            //         fontsDir: config.src.fonts,
            //         imagesDir: config.src.images,
            //         outputStyle: 'compressed',
            //         require: []
            //     }
            // }

            // LESS
            // compile: {
            //     options: {
            //         paths: config.src.styles
            //     },
            //     files: {
            //         src:  config.src.styles + '/style.less',
            //         dest: config.dist.styles + '/style.css'
            //     }
            // }

        });

        grunt.loadNpmTasks('grunt-contrib-' + config.init.style);

    } else {

        // If you don't choose any CSS preprocessor,
        // cssmin task will run by default
        grunt.config('cssmin', {

            dist: {
                options: {
                    banner: config.banner
                },
                expand: true,
                cwd: config.dist.styles,
                src: ['*.css', '!*.min.css'],
                dest: config.dist.styles,
                ext: '.min.css'
            }

        });

        grunt.loadNpmTasks('grunt-contrib-cssmin');

    }

    grunt.config('csslint', {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: {
            options: {
                import: 2
            },
            src: config.dist.styles + '/style.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');

};

