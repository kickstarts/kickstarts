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
            js: "src/documents/assets/js"
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
                    "<%= dirs.js %>/app.min.js": [ "<%= dirs.js %>/main.js" ]
                }
            }
        }
    };

    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------

    grunt.registerTask("default", ["jshint", "uglify"]);


};
