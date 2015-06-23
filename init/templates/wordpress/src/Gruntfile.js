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
            assets: {
                scripts: '../assets/scripts',
                styles:  '../assets/styles',
                images:  '../assets/images',
                fonts:   '../assets/fonts',
            },
            templates: '../includes/templates',
            partials: '../includes/partials',
            bower: 'bower_modules',
            bootstrap: {
                styles: 'bootstrap-sass/assets/stylesheets',
                scripts: 'bootstrap-sass/assets/javascripts'
            },
            report: {
                dir: '../perf_report',
                ts: 50,
                lang: 'pt_BR',
                url: 'http://www.vitorbritto.com.br'
            },
            spec: '../test',
            bin: '../bin'
        }
    });

};
