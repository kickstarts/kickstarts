"use strict";

module.exports = function(grunt) {

    // Module Requires
    // --------------------------
    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);


    // Init Config
    // --------------------------

    var appConfig = {

        // Dirs
        dirs: {
            js:   "../assets/js",
            sass: "../assets/sass",
            css:  "../assets/css",
            img:  "../assets/images"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
        " * -------------------------------------------------------\n" +
        " * Project: <%= pkg.title %>\n" +
        " * Version: <%= pkg.version %>\n" +
        " * Author:  <%= pkg.author.name %> (<%= pkg.author.email %>)\n" +
        " *\n" +
        " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.title %>\n" +
        " * -------------------------------------------------------\n" +
        " */\n" +
        "\n",

        // Start Server
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    hostname: 'localhost',
                    livereload: true,
                    open: true
                }
            }
        },

        // Watch Task
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: "<%= dirs.sass %>/**",
                tasks: "compass"
            },
            js: {
                files: "<%= jshint.all %>",
                tasks: ["jshint", "uglify"]
            }
        },

        // Linting
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                "Gruntfile.js",
                "<%= dirs.js %>/main.js"
            ]
        },

        // Minify and concat
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {

                    "<%= dirs.js %>/app.min.js": [

                    // Custom JavaScript - Your script goes here
                    "<%= dirs.js %>/main.js",

                    // Legacy - Support for old browsers
                    "<%= dirs.js %>/legacy/*"
                    ]
                }
            }
        },

        // Compile Sass/Scss to CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb",
                    outputStyle: "compressed"
                }
            }
        },

        // Optimize images
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: "<%= dirs.img %>/",
                    src: ["**/*.png, **/*.jpg, **/*.gif"],
                    dest: "<%= dirs.img %>/"
                }]
            }
        },

        // FTP Deploy
        "ftp-deploy": {
            build: {
                auth: {
                    host: "ftp.domain.com",
                    port: 21,
                    authKey: "key1"
                },
                src: "../",
                dest: "/www/PATH/to/project/",
                exclusions: [
                    "../**.DS_Store",
                    "../**Thumbs.db",
                    "../.git/*",
                    "../.gitignore",
                    "../.editorconfig",
                    "../assets/sass/*",
                    "../assets/js/bootstrap/*",
                    "../assets/js/legacy/*",
                    "../assets/js/extend.js",
                    "../assets/js/main.js",
                    "../assets/fonts/*.zip",
                    "../src/**",
                    "../*.md",
                    "../htaccess.txt"
                ]
            }
        },

        // Rsync Deploy
        rsync: {
            options: {
                args: ["--verbose"],
                exclude: [
                    "../**.DS_Store",
                    "../**Thumbs.db",
                    "../.git/*",
                    "../.gitignore",
                    "../assets/sass/*",
                    "../assets/js/bootstrap/*",
                    "../assets/js/legacy/*",
                    "../assets/js/libs/*",
                    "../assets/js/extend.js",
                    "../assets/js/main.js",
                    "../src/*",
                    "../*.md"
                ],
                recursive: true,
                syncDest: true
            },
            staging: {
                options: {
                    src: "../",
                    dest: "~/PATH/to/project/",
                    host: "user@host.com",
                }
            },
            production: {
                options: {
                    src: "../",
                    dest: "~/PATH/to/project/",
                    host: "user@host.com",
                }
            }
        }
    };

    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------

    // Start server and watch for changes
    grunt.registerTask("default", ["connect", "watch"]);

    // Run build
    grunt.registerTask("build", ["jshint", "uglify", "compass"]);

    // Optimize Images
    grunt.registerTask("optimize", ["imagemin"]);

    // Deploy Methods
    grunt.registerTask("ftp", ["build", "ftp-deploy"]);
    grunt.registerTask("rsync", ["build", "rsync"]);

    // Aliases Tasks
    grunt.registerTask("b", ["build"]);
    grunt.registerTask("o", ["optimize"]);
    grunt.registerTask("f", ["ftp"]);
    grunt.registerTask("r", ["rsync"]);

};
