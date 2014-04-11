
// --------------------------------------------------------------
// Plugin:
// Author:
// Documentation:
// --------------------------------------------------------------

'use strict';

module.exports = function (grunt) {

    // Documentation: https://npmjs.org/package/grunt-ftp-deploy

    grunt.config('ftp-deploy', {
        build: {
            auth: {
                host: 'server.com',
                port: 21,
                authKey: 'key1'
            },
            src: 'path/to/source/folder',
            dest: '/path/to/destination/folder',
            exclusions: [
                'path/to/source/folder/**/.DS_Store',
                'path/to/source/folder/**/Thumbs.db',
                'dist/tmp'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

};
