module.exports = function (grunt) {

    'use strict';

    require('time-grunt')(grunt);


    // --- Initialize Config ------------------------------------------------------------
    grunt.initConfig({
        bower:  grunt.file.read('.bowerrc').directory,
        pkg:    grunt.file.readJSON('package.json'),
        config: grunt.file.read('./config/config'),
        utils:  grunt.file.read('./config/utils'),
        env:    grunt.file.read('./config/env')
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
    grunt.registerTask('build', 'Build tasks', []);

    // Test Task
    grunt.registerTask('test', 'Test your application', [ 'build', '' ]);

    // Deploy Task
    grunt.registerTask('deploy', 'Deploy files for production', [ 'test', '' ]);

};
