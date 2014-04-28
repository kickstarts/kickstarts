module.exports = function(grunt) {

    'use strict';

    // --- Initialize Config ------------------------------------------------------------

    require('time-grunt')(grunt);
    var config = require('./grunt.conf');

    // --- Load Tasks -------------------------------------------------------------------
    grunt.loadTasks('./tasks');


    // --- Register Tasks ----------------------------------------------------------------

    // Default Task
    grunt.registerTask('default', 'Initialize and watch for changes', function() {
        if (config.init.side === 'client') {
            grunt.log.writeln('Initializing tasks for client-side');
            grunt.task.run(['browserSync', 'watch']);
        } else if (config.init.side === 'server') {
            grunt.log.writeln('Initializing tasks for server-side');
            grunt.task.run(['nodemon', 'watch']);
        } else if (config.init.side === 'both') {
            grunt.log.writeln('Initializing tasks for server-side');
            grunt.task.run(['concurrent:all']);
        }
    });

    // Style Task
    grunt.registerTask('styles', 'Optimize CSS', function() {
        if (config.init.style !== 'none') {
            grunt.task.run(['csslint', config.init.style]);
        } else {
            grunt.task.run(['csslint', 'cssmin']);
        }
    });

    // Script Task
    grunt.registerTask('scripts', 'Optimize JS', ['jshint', 'uglify']);

    // Template Task
    grunt.registerTask('views', 'Compile HTML', function() {
        if (config.init.view !== 'none') {
            grunt.task.run([config.init.view]);
        } else {
            grunt.task.run(['htmlmin']);
        }
    });

    // Image Task
    grunt.registerTask('images', 'Optimize Images', ['imageoptim']);

    // Test Task
    if (config.init.test !== 'none') {
        grunt.registerTask('test', 'Test your application', [config.init.test]);
    }

    // Deploy Task
    if (config.init.deploy !== 'none') {
        grunt.registerTask('deploy', 'Deploy for production', [config.init.deploy]);
    }

    // Bundle Task
    if (config.init.module !== 'none') {
        grunt.registerTask('bundle', 'Bundle Assets', [config.init.module]);
    }

    // Build Project
    grunt.registerTask('build', 'Build project', function() {
        if (config.init.view !== 'none') {
            grunt.task.run(['styles', 'scripts', 'images', config.init.view, 'copy']);
        } else {
            grunt.task.run(['styles', 'scripts', 'images', 'htmlmin' , 'copy']);
        }
    });

    // Launch Project
    grunt.registerTask('launch', 'Deploy files for production', [
        'test',
        'build',
        'deploy'
    ]);

    // Release New Version
    grunt.registerTask('update', 'Release a new version on github', [
        'test',
        'build',
        'bump'
    ]);

};
