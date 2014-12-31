module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('makepot', {
        dist: config.makepot
    });

    grunt.config('po2mo', config.po2mo);

};
