
// --------------------------------------------------------------
// Plugin:
// Author:
// Documentation:
// --------------------------------------------------------------

'use strict';

module.exports = function (grunt) {

    grunt.config('karma', {

        unit: {
            configFile: '<%= config.test %>'
        }

    });

    grunt.loadNpmTasks('grunt-karma');

};
