module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('ftp-deploy', {
        dist: config.ftp
    });

    grunt.config('rsync', {
        dist: config.rsync
    });

    grunt.config('shell', {
        ec2: config.shell.ec2
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-rsync');
    grunt.loadNpmTasks('grunt-shell');

};
