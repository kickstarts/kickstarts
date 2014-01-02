"use strict";

module.exports = function(grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var appConfig = {

        // Dirs
        dirs: {
            js: "assets/js"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
         " * -------------------------------------------------------\n" +
         " * Projeto: <%= pkg.title %>\n" +
         " * Versão: <%= pkg.version %>\n" +
         " *\n" +
         " * Autor:  <%= pkg.author.name %>\n" +
         " * Site:     <%= pkg.author.url %>\n" +
         " * Contato: <%= pkg.author.email %>\n" +
         " *\n" +
         " *\n" +
         " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" +
         " * -------------------------------------------------------\n" +
         " */\n" +
         "\n",

        // Watch Task
        watch: {
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

        // Minify
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {
                    "<%= dirs.js %>/app.min.js": [ "<%= dirs.js %>/main.js" ],
                    "<%= dirs.js %>/legacy.min.js": [ "<%= dirs.js %>/legacy/*" ]
                }
            }
        }

    };

    // Init Config
    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------
    grunt.registerTask( "default", [ "jshint", "uglify", "watch" ]);
    grunt.registerTask( "build", [ "jshint", "uglify" ]);

};