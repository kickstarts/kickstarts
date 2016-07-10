module.exports = function(grunt) {

    'use strict';

    grunt.config('shell', {
        mongo: {
            command: 'mongod',
            options: {
                async: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

};
