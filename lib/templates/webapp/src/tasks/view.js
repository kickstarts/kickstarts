// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-jade: https://github.com/gruntjs/grunt-contrib-jade
// grunt-contrib-handlebars: https://github.com/gruntjs/grunt-contrib-handlebars
// grunt-contrib-htmlmin: https://github.com/gruntjs/grunt-contrib-htmlmin

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.view !== 'none') {

        grunt.config(config.init.view, {

            // JADE
            dist: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    src: config.src.views + '**/*.jade',
                    dest: config.dist.main
                }
            }

            // HANDLEBARS
            // dist: {
            //     options: {
            //         namespace: 'JST'
            //     },
            //     files: {
            //         src: config.src.views + '**/*.jade',
            //         dest: config.dist.main
            //     }
            // }

        });

        // Load npm plugin
        grunt.loadNpmTasks('grunt-contrib-' + config.init.view);

    } else {

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

    }

};
