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
        'browserSync',
        'watch'
    ]);


    // BUILD
    // --------------------------------------

    // DEVELOPMENT
    grunt.registerTask('build', 'Build project for DEVELOPMENT', [
        'compass',
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
        'compass',
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

    // SSH - Amazon EC2
    grunt.registerTask('ec2', 'Deploy project via SSH to Amazon EC2', [
        'build',
        'shell:ec2'
    ]);


    // ASSETS
    // --------------------------------------

    grunt.registerTask('assets', 'Manage icons and background images for all devices', [
        'imagemin',
        'svgmin',
        'grunticon'
    ]);

};
