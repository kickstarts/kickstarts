module.exports = function(grunt) {

    'use strict';

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);


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
        'browserSync',
        'watch'
    ]);


    // BUILD
    // --------------------------------------

    // DEVELOPMENT
    grunt.registerTask('build', 'Build project for DEVELOPMENT', [
        'sass:dist',
        'jshint',
        'browserify',
        'uglify',
        'imagemin',
        'clean',
        'copy:dev',
        'compress'
    ]);

    // PRODUCTION
    grunt.registerTask('release', 'Build project for PRODUCTION', [
        'sass:dist',
        'jshint',
        'browserify',
        'uglify',
        'imagemin',
        'clean',
        'copy:dist',
        'compress'
    ]);


    // DEPLOY
    // --------------------------------------

    // FTP
    grunt.registerTask('ftp', 'Deploy project via FTP Client', [
        'build',
        'ftp-deploy'
    ]);

    // Rsync
    grunt.registerTask('rsync', 'Deploy project via Rsync', [
        'build',
        'rsync'
    ]);


    // ASSETS
    // --------------------------------------

    grunt.registerTask('assets', 'Manage icons and background images for all devices', [
        'imagemin',
        'svgmin',
        'grunticon'
    ]);

};
