module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('watch', config.watch);

    grunt.config('browserSync', {
        dev: config.sync
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-browser-sync');

};
