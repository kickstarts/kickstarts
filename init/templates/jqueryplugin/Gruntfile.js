module.exports = function(grunt) {

    'use strict';

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);



    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON('package.json'),


        // Banner definitions
        meta: {
            banner: '/*\n' +
                ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
                ' *  <%= pkg.description %>\n' +
                ' *  <%= pkg.homepage %>\n' +
                ' *\n' +
                ' *  Made by: <%= pkg.author.name %>\n' +
                ' *  <%= pkg.author.url %>\n' +
                ' *\n' +
                ' *  <%= pkg.license %> License\n' +
                ' */\n'
        },

        // Concat definitions
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            build: {
                src: ['src/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        // Lint definitions
        jshint: {
            files: ['src/<%= pkg.name %>.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            build: {
                options: {
                    import: false
                },
                src: ['src/*.css']
            }
        },

        // Minify definitions
        uglify: {
            build: {
                src: ['dist/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            },
            options: {
                banner: '<%= meta.banner %>'
            }
        },

        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            },
            options: {
                banner: '<%= meta.banner %>'
            }
        },

        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ['src/*'],
            tasks: ['default']
        }

    });



    // -------------------------------------------------------------------------------------
    // REGISTER TASKS
    // -------------------------------------------------------------------------------------

    grunt.registerTask('build', 'Compile files', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('default', 'Initialize and watch for changes', ['jshint', 'csslint', 'build']);

};
