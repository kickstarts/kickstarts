
// --------------------------------------------------------------
// Plugin: grunt-imageoptim
// Author: Jamie Mason
// Documentation: https://github.com/JamieMason/grunt-imageoptim
// --------------------------------------------------------------

'use strict';

module.exports = function (grunt) {

    grunt.config('imageoptim', {
        myPngs: {
            options: {
                jpegMini: false,
                imageAlpha: true,
                quitAfter: true
            },
            src: ['img/png']
        },
        myJpgs: {
            options: {
                jpegMini: true,
                imageAlpha: false,
                quitAfter: true
            },
            src: ['img/jpg']
        }
    });

    grunt.loadNpmTasks('grunt-imageoptim');

};
