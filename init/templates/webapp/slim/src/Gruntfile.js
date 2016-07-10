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

    // DEFAULT
    // --------------------------------------

    grunt.registerTask('default', 'Initialize and watch for changes', [
        'compile',
        'browserSync',
        'watch'
    ]);

    // COMPILE
    // --------------------------------------

    grunt.registerTask('compile', 'Build project for DEVELOPMENT', [
        'compass',
        'jshint',
        'browserify',
        'uglify'
    ]);


    // BUILD
    // --------------------------------------

    // DEVELOPMENT
    grunt.registerTask('dev', 'Build project for DEVELOPMENT', [
        'compass',
        'jshint',
        'browserify',
        'uglify',
        'clean',
        'copy:dev',
        'compress'
    ]);

    // PRODUCTION
    grunt.registerTask('prod', 'Build project for PRODUCTION', [
        'compass',
        'jshint',
        'browserify',
        'uglify',
        'clean',
        'copy:dist',
        'compress'
    ]);

};
