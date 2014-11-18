module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('mocha', {
        spec: config.spec
    });

    // grunt.loadNpmTasks('grunt-mocha');

};

