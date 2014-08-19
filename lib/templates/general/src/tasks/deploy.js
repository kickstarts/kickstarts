// AVAILABLE PLUGINS
// -----------------

// grunt-ftp-deploy: https://github.com/zonak/grunt-ftp-deploy

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('ftp-deploy', {
        dist: config.deploy
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

};
