///////////////////////////////////////////
// CLIENT CONFIG                         //
///////////////////////////////////////////

'use strict';

module.exports = {

    // APP
    appName: 'myApp',
    appDeps: [
        'ngResource',
        'ngRoute',
        'myApp.config'
    ],
    appModules: {
        'controllers': require('./controllers'),
        'services': require('./services'),
        'filters': require('./filters'),
        'directives': require('./directives')
    },

    // ROUTES
    routes: {
        '/': {
            templateUrl: 'views/pages/home',
            controller: 'appController',
            page: {
                title: 'Home',
                description: 'This is where we will put some interesting things.'
            }
        },
        '/404': {
            templateUrl: 'views/error/404',
            page: {
                title: '404',
                description: 'Whoops looks like we cannot find that page sorry',
                keywords: ''
            }
        },
        '/500': {
            templateUrl: 'views/error/500',
            page: {
                title: '500',
                description: 'Uh-Oh looks like a 500 error.',
                keywords: ''
            }
        }
    }
};
