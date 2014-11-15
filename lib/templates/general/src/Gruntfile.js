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

    grunt.registerTask('compile', 'Compile files', [
        'sass',
        'csslint',
        'csscomb',
        'cssmin',
        'jshint',
        'browserify',
        'uglify',
        'imagemin'
    ]);


    // BUILD
    // --------------------------------------

    // DEVELOPMENT
    grunt.registerTask('build', 'Build project - DEVELOPMENT ENVIRONMENT', [
        'compile',
        'clean',
        'copy:dev',
        'compress'
    ]);

    // PRODUCTION
    grunt.registerTask('release', 'Build project - PRODUCTION ENVIRONMENT', [
        'compile'
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
