// AVAILABLE PLUGINS
// -----------------
// grunt-browser-sync: https://www.npmjs.org/package/grunt-browser-sync
// grunt-contrib-watch: https://github.com/gruntjs/grunt-contrib-watch
// grunt-nodemon: https://github.com/ChrisWren/grunt-nodemon

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    if (config.init.side === 'client') {

        grunt.config('browserSync', {
            dev: {
                bsFiles: {
                    src: config.syncFiles
                },
                options: {
                    watchTask: true
                }
            }
        });

        grunt.config('watch', {
            options: {
                livereload: true
            },
            css: {
                files: config.src.styles + '/**',
                tasks: 'styles'
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: 'scripts'
            }
        });

        grunt.loadNpmTasks('grunt-browser-sync');
        grunt.loadNpmTasks('grunt-contrib-watch');

    } else if (config.init.side === 'server') {

        grunt.config('nodemon', {
            dev: {
                script: 'index.js',
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '8181'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**'],
                    ext: 'js,coffee',
                    watch: ['server'],
                    delay: 1000,
                    legacyWatch: true
                }
            },
            exec: {
                options: {
                    exec: 'less'
                }
            }
        });

        grunt.loadNpmTasks('grunt-nodemon');

    } else if (config.init.side === 'both') {

        grunt.config('browserSync', {
            dev: {
                bsFiles: {
                    src: config.sync.files
                },
                options: {
                    watchTask: true
                }
            }
        });

        grunt.config('watch', {
            options: {
                livereload: true
            },
            css: {
                files: config.src.styles + '/**',
                tasks: 'styles'
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: 'scripts'
            }
        });

        grunt.config('nodemon', {
            dev: {
                script: 'index.js',
                options: {
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '8181'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**'],
                    ext: 'js,coffee',
                    watch: ['server'],
                    delay: 1000,
                    legacyWatch: true
                }
            },
            exec: {
                options: {
                    exec: 'less'
                }
            }
        });

        grunt.loadNpmTasks('grunt-browser-sync');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-nodemon');

    }

};
