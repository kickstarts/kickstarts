// AVAILABLE PLUGINS
// -----------------
// grunt-imageoptim: https://github.com/JamieMason/grunt-imageoptim

module.exports = function(grunt) {

    'use strict';

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
