module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('qunit', {
        spec: config.spec
    });

    // grunt.loadNpmTasks('grunt-contrib-qunit');

};

