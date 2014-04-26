// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-jasmine: https://github.com/gruntjs/grunt-contrib-jasmine
// grunt-contrib-qunit: https://github.com/gruntjs/grunt-contrib-qunit
// grunt-mocha-test: https://github.com/pghalliday/grunt-mocha-test

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.test !== 'none' || config.init.karma !== true) {

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

    } else {

        grunt.config('karma', {

            // Unit testing is provided by Karma.  Change the two commented locations
            // below to either: mocha, jasmine, or qunit.
            options: {
                basePath: process.cwd(),
                singleRun: true,
                captureTimeout: 7000,
                autoWatch: true,
                logLevel: 'ERROR',

                reporters: ['dots', 'coverage'],
                browsers: ['PhantomJS'],

                // Change this to the framework you want to use.
                frameworks: ['mocha'],

                plugins: [
                    'karma-jasmine',
                    'karma-mocha',
                    'karma-qunit',
                    'karma-phantomjs-launcher',
                    'karma-coverage'
                ],

                preprocessors: {
                    'app/**/*.js': 'coverage'
                },

                coverageReporter: {
                    type: 'lcov',
                    dir: 'test/coverage'
                },

                files: [
                    // You can optionally remove this or swap out for a different expect.
                    'vendor/bower/chai/chai.js',
                    'vendor/bower/requirejs/require.js',
                    'test/runner.js',

                    { pattern: 'app/**/*.*', included: false },
                    // Derives test framework from Karma configuration.
                    {
                        pattern: 'test/<%= karma.options.frameworks[0] %>/**/*.spec.js',
                        included: false
                    },
                    { pattern: 'vendor/**/*.js', included: false }
                ]
            },

            // This creates a server that will automatically run your tests when you
            // save a file and display results in the terminal.
            daemon: {
                options: {
                    singleRun: false
                }
            },

            // This is useful for running the tests just once.
            run: {
                options: {
                    singleRun: true
                }
            }

        });

        grunt.config('coveralls', {

            options: {
                coverage_dir: 'test/coverage/'
            }

        });

    }

};
