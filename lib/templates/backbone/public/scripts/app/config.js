/*global require*/
'use strict';

require.config({
    baseUrl: '../src/components/',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        jquery: {
            exports: 'jquery'
        },

    },
    paths: {
        jquery: 'jquery/jquery',
        backbone: 'backbone/backbone',
        underscore: 'underscore/underscore',
        text: 'requirejs-text/text'
    }
});
