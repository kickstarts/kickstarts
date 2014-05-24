module.exports = function(grunt) {

    'use strict';

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    require('time-grunt')(grunt);


    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    grunt.loadTasks('./tasks');


    // -------------------------------------------------------------------------------------
    // REGISTER TASKS
    // -------------------------------------------------------------------------------------

    // Default Task
    grunt.registerTask('default', 'Initialize and watch for changes', [
        'browserSync',
        'watch'
    ]);

    // Build Project
    grunt.registerTask('build', 'Build project', [
        'compass',
        'jshint',
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
