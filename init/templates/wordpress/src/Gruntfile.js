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
        'build',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', 'Compile files', [
        'compass',
        'csslint',
        'csscomb',
        'cssmin',
        'jshint',
        'browserify',
        'uglify'
    ]);


    // BUILD
    // --------------------------------------

    // DEVELOPMENT
    grunt.registerTask('dev', 'Build project - DEVELOPMENT ENVIRONMENT', [
        'build',
        'imagemin',
        'clean',
        'copy:dev',
        'compress'
    ]);

    // PRODUCTION
    grunt.registerTask('prod', 'Build project - PRODUCTION ENVIRONMENT', [
        'build',
        'imagemin',
        'clean',
        'copy:dist',
        'compress'
    ]);


    // ASSETS
    // --------------------------------------

    grunt.registerTask('assets', 'Manage icons and background images for all devices', [
        'imagemin',
        'svgmin',
        'grunticon'
    ]);


    // UNIT TESTS
    // --------------------------------------

    grunt.registerTask('spec', 'Run Unit Tests', [
        'build',
        'mocha'
    ]);


    // TRANSLATE
    // --------------------------------------

    grunt.registerTask('translate', 'Internationalization for WordPress Themes', [
        'makepot',
        'po2mo'
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

    // Bump
    grunt.registerTask('git', 'Release new version', [
        'build',
        'bump'
    ]);

};
