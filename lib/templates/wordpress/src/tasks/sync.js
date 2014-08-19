// AVAILABLE PLUGINS
// -----------------

// grunt-browser-sync: https://www.npmjs.org/package/grunt-browser-sync
// grunt-contrib-watch: https://github.com/gruntjs/grunt-contrib-watch

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('browserSync', {
        dev: config.sync
    });

    grunt.config('watch', config.watch);

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
