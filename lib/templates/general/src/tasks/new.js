// AVAILABLE PLUGINS
// -----------------
// grunt-bump: https://github.com/vojtajina/grunt-bump

module.exports = function(grunt) {

    'use strict';

    // var config = require('../grunt.conf');

    grunt.config('bump', {
        options: {
            commit: true,
            commitFiles: ['bower.json', 'dist/*'],
            commitMessage: 'Release v%VERSION%',
            createTag: true,
            files: ['bower.json'],
            push: true,
            pushTo: 'origin gh-pages',
            tagMessage: '',
            tagName: 'v%VERSION%'
        }
    });

    grunt.loadNpmTasks('grunt-bump');

};
