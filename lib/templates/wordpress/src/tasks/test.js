// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-jasmine: https://github.com/gruntjs/grunt-contrib-jasmine
// grunt-contrib-qunit: https://github.com/gruntjs/grunt-contrib-qunit
// grunt-mocha-test: https://github.com/pghalliday/grunt-mocha-test

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.test !== 'none') {

        grunt.config(config.init.test, {

            // MOCHA
            test: {
                src: config.test.main + '/*.html',
                options: {
                    run: true,
                },
            }

            // JASMINE
            // pivotal: {
            //     src: config.test.src + '/**/*.js',
            //     options: {
            //         specs: config.test.modules + '/*Spec.js',
            //         helpers: config.test.helpers + '/*Helper.js'
            //     }
            // }

            // QUNIT
            // all: [config.test.main + '/**/*.html']

        });

        // Load npm plugin
        if (config.init.test === 'mocha') {
            grunt.loadNpmTasks('grunt-mocha');
        } else {
            grunt.loadNpmTasks('grunt-contrib-' + config.init.test);
        }

    } else if (config.init.karma) {

        grunt.config('karma', {

            options: {
                configFile: 'karma.conf.js'
            },
            watcher: {
                background: true,
                singleRun: false
            },
            test: {
                singleRun: true
            }

        });

        grunt.config('coveralls', {

            options: {
                coverage_dir: 'test/coverage/'
            }

        });

        grunt.loadNpmTasks('grunt-karma');
        grunt.loadNpmTasks('grunt-karma-coveralls');

    }

};
