module.exports = function(grunt) {

    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        // Project config
        config: {
            src:  'src',
            dist: 'dist'
        },

        // Watch
        watch: {
            assemble: {
                files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
                tasks: ['assemble']
            },
            css: {
                files: ['<%= config.src %>/assets/stylus/**/*.styl'],
                tasks: ['stylus']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.dist %>/{,*/}*.html',
                    '<%= config.dist %>/assets/{,*/}*.css',
                    '<%= config.dist %>/assets/{,*/}*.js',
                    '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // Connect/Server
        connect: {
            options: {
                port:       9000,
                livereload: 35729,
                hostname:   'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.dist %>'
                    ]
                }
            }
        },

        // Stylus
        stylus: {
            compile: {
                options: {
                    paths: ['<%= config.src %>/assets/stylus/'],
                    compress: false,
                    "include css": true
                },
                files: {
                    '<%= config.dist %>/assets/css/main.css': '<%= config.src %>/assets/stylus/main.styl'
                }
            }
        },

        // Assemble
        assemble: {
            pages: {
                options: {
                    flatten:  true,
                    assets:   '<%= config.dist %>/assets',
                    layout:   '<%= config.src %>/templates/layouts/default.hbs',
                    data:     '<%= config.src %>/data/*.{json,yml}',
                    partials: '<%= config.src %>/templates/partials/*.hbs',
                    plugins:  ['assemble-contrib-anchors','assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-contrib-toc'],
                },
                files: {
                    '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
                }
            }
        },

        // Clean files in 'dist' folder
        clean: ['<%= config.dist %>/**/*.{html,xml}']

    });
    
    // Load tasks
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Task: Dev
    grunt.registerTask('server', [
        'clean',
        'assemble',
        'connect:livereload',
        'watch',
        'stylus'
    ]);

    // Task: Build
    grunt.registerTask('build', [
        'clean',
        'assemble',
        'stylus'
    ]);
};