module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('karma', {

        options: {
            configFile: config.karma.setup
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
            coverage_dir: config.karma.coveralls
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-karma-coveralls');

};
