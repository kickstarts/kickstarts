module.exports = function(grunt) {

    'use strict';

    var config = require('../task');

    grunt.config('imageoptim', {
        images: {
            options: {
                jpegMini: false,
                imageAlpha: true,
                quitAfter: true
            },
            src: config.imagemin
        }
    });

    grunt.loadNpmTasks('grunt-imageoptim');

};
