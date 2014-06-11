module.exports = function(grunt) {

    'use strict';

    ///////////////////////////////////////////
    // CONFIGURATION                         //
    ///////////////////////////////////////////

    require('time-grunt')(grunt);
    grunt.loadTasks('./config/tasks');


    ///////////////////////////////////////////
    // TASKS                                 //
    ///////////////////////////////////////////

    // Default Task
    grunt.registerTask('default', 'Start Web Server and watch for changes', ['concurrent']);

    // Build Project
    grunt.registerTask('build', 'Build project', [
        'stylus',
        'jshint',
        'browserify',
        'uglify',
        'imageoptim'
    ]);

    // Share Project
    grunt.registerTask('share',  'Clean previous build, copy and compress files', [
        'clean',
        'copy',
        'compress'
    ]);

};
