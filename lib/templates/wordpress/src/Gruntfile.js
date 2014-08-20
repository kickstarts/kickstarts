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
        'browserify',
        'uglify'
    ]);

    // Share Project
    grunt.registerTask('generate', 'Clean previous build, copy and compress files', [
        'clean',
        'copy',
        'compress'
    ]);

    // Deploy Project
    grunt.registerTask('deploy', 'Deploy project via FTP Client', [
        'build',
        'ftp-deploy'
    ]);

};
