module.exports = function(grunt) {

    'use strict';

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    var path = require('path');

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt_modules'),
        data: {

            // Directories
            bower:          'bower_modules',
            languages:      '../languages',
            test:           '../test',
            spec:           '../test',
            bin:            '../bin',
            assets: {
                scripts:    '../assets/scripts',
                styles:     '../assets/styles',
                images:     '../assets/images',
                fonts:      '../assets/fonts'
            },

            // Paths
            locals: {
                development: 'http://localhost/~vitorbritto', // Set your development url
                stage: 'http://talk.tagon8.com',              // Set your stage url
                production: 'http://www.revistatalk.com.br',  // Set your production url
            },

            // Deployment
            deploy: {
                ssh: {
                    dest: 'public_html/',
                    host: 'user@host.com'
                },
                ftp: {
                    dest: 'public_html/',
                    host: 'ftp.host.com'
                }
            }

            // Bootstrap
            bootstrap: {
                styles: 'bootstrap-sass/assets/stylesheets',
                scripts: 'bootstrap-sass/assets/javascripts'
            },

            // Perf Reports
            report: {
                dir: '../perf',
                ts: 50,
                lang: 'pt_BR',
                url: '<%= locals.production %>'
            },

            // Screen Captures
            capture: {
                sizes: {
                    desktop: [
                        '1920x1200',
                        '1680x1050',
                        '1440x900',
                        '1366x768',
                        '1280x800',
                        '1024x768'
                    ],
                    tablet: [
                        '800x1280',
                        '768x1024',
                        '600x1024'
                    ],
                    smartphone: [
                        '414x736',
                        '375x667',
                        '360x640',
                        '320x480'
                    ]
                },
                urls: {
                    dev: [ // Set development urls here
                        '<%= locals.development %>/',                  // Home
                        '<%= locals.development %>/category/foo',      // Category
                        '<%= locals.development %>/foo',               // Page Not Found
                        '<%= locals.development %>/foo',               // Archive
                        '<%= locals.development %>/foo/'               // Single
                    ],
                    stage: [ // Set stage urls here
                        '<%= locals.stage %>/',                        // Home
                        '<%= locals.stage %>/category/foo',            // Category
                        '<%= locals.stage %>/foo',                     // Page Not Found
                        '<%= locals.stage %>/foo',                     // Archive
                        '<%= locals.stage %>/foo/'                     // Single
                    ],
                    prod: [ // Set production urls here
                        '<%= locals.production %>/',                   // Home
                        '<%= locals.production %>/category/foo',       // Category
                        '<%= locals.production %>/foo',                // Page Not Found
                        '<%= locals.production %>/foo',                // Archive
                        '<%= locals.production %>/foo/'                // Single
                    ]
                },
                crop: true,
                dir: '../captures',
                filename: '{{date}}-{{url}}-{{size}}',
                format: 'jpg'
            }
        }
    });

};
