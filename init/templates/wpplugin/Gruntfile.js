module.exports = function(grunt) {

    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);



    // -------------------------------------------------------------------------------------
    // CONFIG TASKS
    // -------------------------------------------------------------------------------------

    grunt.initConfig({

        // SETTINGS
        // -----------------------------------------------------------

        path: {
            css: 'assets/styles',
            js: 'assets/scripts',
            imgs: 'assets/images',
            fonts: 'assets/fonts',
            spec: 'test',
            build: '_build'
        },

        pkg: grunt.file.readJSON('package.json'),

        deploy: {
            path: '/PATH/TO/YOUR/SVN/REPO/<%= pkg.name %>',
            tag: '<%= deploy.path %>/tags/<%= pkg.version %>',
            trunk: '<%= deploy.path %>/trunk',
            exclude: [
                'node_modules/**',
                '.git/**',
                '.sass-cache/**',
                '<%= path.css %>/src/',
                '<%= path.js %>/src/',
                'Gruntfile.js',
                'package.json',
                '.csslintrc',
                '.jshintrc',
                '.editorconfig',
                '.gitignore',
                '.gitmodules',
                'release/**'
            ]
        },


        // WATCH FILES
        // -----------------------------------------------------------

        watch: {
            styles: {
                files: [
                    '<%= path.css %>/src/**/*.scss',
                    '<%= path.css %>/public.css',
                    '<%= path.css %>/admin.css'
                ],
                tasks: ['compass', 'csslint']
            },
            scripts: {
                files: ['<%= jshint.all %>'],
                tasks: ['jshint', 'browserify', 'uglify']
            }
        },


        // BUILD JS
        // -----------------------------------------------------------

        // Lint Scripts
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= path.js %>/src/modules/*.js',
                '<%= path.js %>/src/admin.js',
                '<%= path.js %>/src/public.js'
            ]
        },

        // Bundle Scripts
        browserify: {
            dist: {
                files: {
                    '<%= path.js %>/src/public.bundle.js': ['<%= path.js %>/src/public.js'],
                    '<%= path.js %>/src/admin.bundle.js': ['<%= path.js %>/src/admin.js']
                }
            }
        },

        // Minify Scripts
        uglify: {
            all: {
                files: {
                    '<%= path.js %>/public.min.js': ['<%= path.js %>/src/public.bundle.js'],
                    '<%= path.js %>/admin.min.js': ['<%= path.js %>/src/admin.bundle.js'],
                    '<%= path.js %>/vendors.min.js': ['<%= path.js %>/src/vendors/*.js']
                },
                options: {
                    mangle: false
                }
            }
        },

        // Unit Tests
        test: {
            files: ['<%= path.spec %>/**/*.js']
        },


        // BUILD CSS
        // -----------------------------------------------------------

        // Compile CSS
        compass: {
            dist: {
                options: {
                    // force: false,
                    sassDir: '<%= path.css %>/src',
                    cssDir: '<%= path.css %>',
                    javascriptsDir: '<%= path.js %>',
                    fontsDir: '<%= path.fonts %>',
                    imagesDir: '<%= path.imgs %>',
                    outputStyle: 'compressed'
                }
            }
        },

        // Lint CSS
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                src: [
                    '<%= path.css %>/public.css',
                    '<%= path.css %>/admin.css'
                ]
            }
        },


        // ASSETS
        // -----------------------------------------------------------

        // Image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= path.imgs %>/admin/',
                        src: '**/*.{png,jpg,gif}',
                        dest: '<%= path.imgs %>/admin/'
                    },
                    {
                        expand: true,
                        cwd: '<%= path.imgs %>/public/',
                        src: '**/*.{png,jpg,gif}',
                        dest: '<%= path.imgs %>/public/'
                    },
                    {
                        expand: true,
                        cwd: './',
                        src: 'screenshot-*.png',
                        dest: './'
                    }
                ]
            }
        },


        // RELEASE PLUGIN
        // -----------------------------------------------------------

        clean: {
            main: ['<%= path.build %>/<%= pkg.version %>']
        },

        copy: {
            // Copy the plugin to a versioned release directory
            main: {
                src:  [
                    '**',
                    '!node_modules/**',
                    '!<%= path.build %>/**',
                    '!<%= path.spec %>/**',
                    '!<%= path.css %>/src/**',
                    '!<%= path.js %>/src/**',
                    '!.git/**',
                    '!.sass-cache/**',
                    '!Gruntfile.js',
                    '!package.json',
                    '!.csslintrc',
                    '!.jshintrc',
                    '!.editorconfig',
                    '!.gitignore'
                ],
                dest: '<%= path.build %>/<%= pkg.version %>/<%= pkg.name %>/'
            }
        },

        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: './<%= path.build %>/<%= pkg.version %>/<%= pkg.name %>.zip'
                },
                expand: true,
                cwd: '<%= path.build %>/<%= pkg.version %>/',
                src: ['**/*'],
                dest: '<%= pkg.name %>/'
            }
        },


        // TRANSLATE PLUGIN
        // -----------------------------------------------------------

        // Create *.pot file
        pot: {
            options:{
                text_domain: '<%= pkg.name %>',
                dest: 'languages/',
                keywords: [
                    '__:1',
                    '_e:1',
                    '_x:1,2c',
                    'esc_html__:1',
                    'esc_html_e:1',
                    'esc_html_x:1,2c',
                    'esc_attr__:1',
                    'esc_attr_e:1',
                    'esc_attr_x:1,2c',
                    '_ex:1,2c',
                    '_n:1,2',
                    '_nx:1,2,4c',
                    '_n_noop:1,2',
                    '_nx_noop:1,2,3c'
                ],
            },
            files:{
                src:  ['**/*.php'],
                expand: true,
            }
        },

        // Check Text Domain
        checktextdomain: {
            options: {
                text_domain: '<%= pkg.name %>',
                correct_domain: true,
                keywords: [
                    '__:1,2d',
                    '_e:1,2d',
                    '_x:1,2c,3d',
                    'esc_html__:1,2d',
                    'esc_html_e:1,2d',
                    'esc_html_x:1,2c,3d',
                    'esc_attr__:1,2d',
                    'esc_attr_e:1,2d',
                    'esc_attr_x:1,2c,3d',
                    '_ex:1,2c,3d',
                    '_n:1,2,4d',
                    '_nx:1,2,4c,5d',
                    '_n_noop:1,2,3d',
                    '_nx_noop:1,2,3c,4d'
                ],
            },
            files: {
                src:  ['**/*.php'],
                expand: true,
            },
        },

        //  Generates *.mo file
        po2mo: {
            files: {
                src: 'languages/*.po',
                expand: true,
            },
        },


        // DEPLOY PLUGIN
        // -----------------------------------------------------------

        // Deploy files to svn repository using rsync
        rsync: {
            options: {
                args: ['--verbose'],
                exclude: '<%= deploy.exclude %>',
                syncDest: true,
                recursive: true
            },
            tag: {
                options: {
                    src: './<%= pkg.name %>',
                    dest: '<%= deploy.tag %>'
                }
            },
            trunk: {
                options: {
                    src: './<%= pkg.name %>',
                    dest: '<%= deploy.trunk %>'
                }
            }
        },

        // shell command to commit the new version of the plugin
        shell: {
            // Remove delete files.
            svn_remove: {
                command: 'svn st | grep \'^!\' | awk \'{print $2}\' | xargs svn --force delete',
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: '<%= deploy.path %>'
                    }
                }
            },
            // Add new files.
            svn_add: {
                command: 'svn add --force * --auto-props --parents --depth infinity -q',
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: '<%= deploy.path %>'
                    }
                }
            },
            // Commit the changes.
            svn_commit: {
                command: 'svn commit -m "updated the plugin version to <%= pkg.version %>"',
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: '<%= deploy.path %>'
                    }
                }
            }
        }

    });



    // -------------------------------------------------------------------------------------
    // REGISTER TASKS
    // -------------------------------------------------------------------------------------

    // DEFAULT
    // --------------------------------------

    grunt.registerTask('default', 'Initialize and watch for changes', [
        'watch'
    ]);


    // BUILD
    // --------------------------------------

    grunt.registerTask('build', 'Release Plugin for production', [
        'compass',
        'csslint',
        'jshint',
        'browserify',
        'uglify',
        'imagemin',
        'clean',
        'copy',
        'compress'
    ]);


    // TEST
    // --------------------------------------
    grunt.registerTask('spec', 'Run unit tests', [
        'test'
    ]);


    // TRANSLATE
    // --------------------------------------
    grunt.registerTask('lang', 'Translate Plugin', [
        'pot',
        'checktextdomain',
        'po2mo'
    ]);


    // DEPLOY
    // --------------------------------------
    grunt.registerTask('deploy', 'Deploy Plugin', [
        'build',
        'rsync',
        'shell'
    ]);

};
