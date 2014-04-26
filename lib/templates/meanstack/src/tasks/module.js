// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-requirejs: https://github.com/gruntjs/grunt-contrib-requirejs
// grunt-browserify: https://github.com/jmreidy/grunt-browserify
// grunt-umd: https://github.com/alexlawrence/grunt-umd

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.module !== 'none') {

        grunt.config(config.init.module, {

            // REQUIREJS
            dist: {
                options: {
                    baseUrl: config.modules + '/**/*.js',
                    mainConfigFile: config.src.scripts + '/config.js',
                    out: config.dist.scripts + '/bundle.js',
                }
            },

            // BROWSERIFY
            // dist: {
            //     files: {
            //         src: config.modules + '/**/*.js',
            //         dest: config.dist.scripts + '/bundle.js'
            //     },
            //     options: {
            //         transform: ['']
            //     }
            // }

            // UMD
            // all: {
            //     src: config.modules + '/**/*.js',
            //     dest: config.dist.scripts + '/bundle.js', // optional, if missing the src will be used
            //     template: 'path/to/template.hbs', // optional; a template from templates subdir (e.g. 'umd')
            //     objectToExport: 'library', // optional, internal object that will be exported
            //     amdModuleId: 'id', // optional, if missing the AMD module will be anonymous
            //     globalAlias: 'alias', // optional, changes the name of the global variable
            //     indent: '  ', // optional, indent source code
            //     deps: { // optional
            //         'default': ['foo', 'bar'],
            //         amd: ['foobar', 'barbar'],
            //         cjs: ['foo', 'barbar'],
            //         global: ['foobar', 'bar']
            //     }
            // }

        });

        // Load npm plugin
        grunt.loadNpmTasks('grunt-' + config.init.module);

    }

};
