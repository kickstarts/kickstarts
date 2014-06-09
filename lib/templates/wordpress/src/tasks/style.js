// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-compass: https://github.com/gruntjs/grunt-contrib-compass

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('compass', {

        compile: {
            options: {
                force: false,
                // require: []
                // banner: config.banner,
                sassDir: config.src.styles,
                cssDir: config.dist.styles,
                javascriptsDir: config.src.scripts,
                fontsDir: config.src.fonts,
                imagesDir: config.src.images,
                outputStyle: 'compressed'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');

};

