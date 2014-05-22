// AVAILABLE PLUGINS
// -----------------
// grunt-ftp-deploy: https://github.com/zonak/grunt-ftp-deploy
// grunt-rsync: https://github.com/jedrichards/grunt-rsync

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.module !== 'none') {

        grunt.config(config.init.deploy, {

            // FTP
            build: {
                auth: {
                    host: config.deploy.host,
                    port: config.deploy.port,
                    authKey: 'key1' // Settings in .ftppass file
                },
                src: config.deploy.src,
                dest: config.deploy.dest,
                exclusions: config.deploy.ignored
            }

            // RSYNC
            // options: {
            //     args: ['--verbose'],
            //     exclude: config.deploy.ignored,
            //     recursive: true
            // },
            // dist: {
            //     options: {
            //         src: config.deploy.src,
            //         dest: config.deploy.dest,
            //         host: config.deploy.host,
            //         syncDestIgnoreExcl: true
            //     }
            // }

        });

        // Load npm plugin
        grunt.loadNpmTasks('grunt-' + config.init.deploy);

    }

};

