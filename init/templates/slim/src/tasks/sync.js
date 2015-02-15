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
