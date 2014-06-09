// AVAILABLE PLUGINS
// -----------------
// grunt-ftp-deploy: https://github.com/zonak/grunt-ftp-deploy

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('ftp-deploy', {
        build: {
            auth: {
                host: config.deploy.host,
                port: config.deploy.port,
                authKey: config.deploy.auth,
            },
            src: config.deploy.src,
            dest: config.deploy.dest,
            exclusions: config.deploy.ignore
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

};
