///////////////////////////////////////////
// CLIENT CONFIG                         //
///////////////////////////////////////////

'use strict';

module.exports = {

    appName: 'myApp',
    appDeps: [
        'ngResource',
        'ngRoute',
        'myApp.config'
    ],
    appModules: {
        'controllers': require('../client/scripts/controllers'),
        'services': require('../client/scripts/services'),
        'filters': require('../client/scripts/filters'),
        'directives': require('../client/scripts/directives')
    }

};
