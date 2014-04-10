module.exports = function (grunt) {

    'use strict';

    require('time-grunt')(grunt);


    // --- Initialize Config ------------------------------------------------------------
    grunt.initConfig({
        pkg:    grunt.file.readJSON('package.json'),
        bower:  grunt.file.readJSON('.bowerrc').directory,
        config: grunt.file.read('./grunt.conf'),
        karma:  grunt.file.read('./karma.conf')
    });


    // --- Load Tasks -------------------------------------------------------------------
    grunt.loadTasks('tasks');


    // --- Register Tasks ----------------------------------------------------------------

    // Default Task
    grunt.registerTask('default', 'Initialize and watch for changes', function () {
        if (config.side === 'client') {
            grunt.log.writeln('Initializing tasks for client-side');
            grunt.task.run([ 'browser-sync', 'watch' ]);
        }
        if (config.side === 'server') {
            grunt.log.writeln('Initializing tasks for server-side');
            grunt.task.run([ 'nodemon', 'watch' ]);
        }
    });

    // Build Task
    grunt.registerTask('build', 'Build tasks', ['uglify', 'jshint', 'csslint']);

    // Test Task
    grunt.registerTask('test', 'Test your application', ['mocha']);

    // Deploy Task
    grunt.registerTask('deploy', 'Deploy files for production', [ 'test', 'build', 'ftp']);

    // Bundle Assets
    grunt.registerTask('bundle', 'Bundle Assets', ['browserify']);


};
