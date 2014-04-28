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
            // vendor: {
            //     src: config.requires + '/**/*.js',
            //     dest: config.dist.scripts + '/vendor.js'
            //     options: {
            //         shim: {
            //             jquery: {
            //                 path: config.requires + '/jquery/jquery.js',
            //                 exports: '$'
            //             }
            //         }
            //     }
            // },
            // app: {
            //     files: {
            //         src: config.modules + '/**/*.js',
            //         dest: config.dist.scripts + '/app.js'
            //     },
            //     options: {
            //         transform: config.transforms,
            //         external: config.dependencies.global
            //     }
            // },
            // test: {
            //     files: {
            //         src: config.spec.main + '/**/*.js',
            //         dest: config.dist.scripts + '/test.js'
            //     },
            //     options: {
            //         transform: config.transforms,
            //         external: config.dependencies.global
            //     }
            // }

            // UMD
            // dist: {
            //     src: config.modules + '/**/*.js',
            //     dest: config.dist.scripts + '/bundle.js', // optional, if missing the src will be used
            //     template: 'path/to/template.hbs', // optional; a template from templates subdir (e.g. 'umd')
            //     objectToExport: 'library', // optional, internal object that will be exported
            //     amdModuleId: 'id', // optional, if missing the AMD module will be anonymous
            //     globalAlias: 'alias', // optional, changes the name of the global variable
            //     indent: '  ', // optional, indent source code
            //     deps: { // optional
            //         'default': config.dependencies.default,
            //         amd: config.dependencies.amd,
            //         cjs: config.dependencies.cjs,
            //         global: config.dependencies.global
            //     }
            // }

        });

        // Load npm plugin
        grunt.loadNpmTasks('grunt-' + config.init.module);

    }

};
