// AVAILABLE PLUGINS
// -----------------
// grunt-imageoptim: https://github.com/JamieMason/grunt-imageoptim

module.exports = function(grunt) {

    'use strict';

    // var config = require('../grunt.conf');

    grunt.config('imageoptim', {
        images: {
            options: {
                jpegMini: false,
                imageAlpha: true,
                quitAfter: true
            },
            src: ['img/png']
        }
    });

    grunt.loadNpmTasks('grunt-imageoptim');

};
