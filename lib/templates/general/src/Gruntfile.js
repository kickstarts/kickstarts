module.exports = function(grunt) {

    'use strict';

    // --- Initialize Config ------------------------------------------------------------

    require('time-grunt')(grunt);
    var config = require('./grunt.conf');

    // --- Load Tasks -------------------------------------------------------------------
    grunt.loadTasks('./tasks');


    // --- Register Tasks ----------------------------------------------------------------

    // Default Task
    grunt.registerTask('default', 'Initialize and watch for changes', ['browserSync', 'watch']);

    // Style Task
    grunt.registerTask('styles', 'Optimize CSS', ['csslint', config.init.style]);

    // Script Task
    grunt.registerTask('scripts', 'Optimize JS', ['jshint', 'uglify']);

    // Template Task
    grunt.registerTask('views', 'Minify HTML', ['htmlmin']);

    // Image Task
    grunt.registerTask('images', 'Optimize Images', ['imageoptim']);

    // Deploy Task
    if (config.init.deploy !== 'none') {
        grunt.registerTask('deploy', 'Deploy for production', [config.init.deploy]);
    }

    // Build Project
    grunt.registerTask('build', 'Build project', [
        'styles',
        'scripts',
        'images',
        'htmlmin',
        'copy'
    ]);

    // Launch Project
    if (config.init.deploy !== 'none') {
        grunt.registerTask('launch', 'Deploy files for production', [
            'build',
            'deploy'
        ]);
    }

};
