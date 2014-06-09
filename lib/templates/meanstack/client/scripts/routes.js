///////////////////////////////////////////
// ROUTES                                //
///////////////////////////////////////////

'use strict';

var controllers = require('./controllers');

module.exports = function (angular) {

    angular.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.jade',
                controller: controllers.main,
                page: {
                    title: 'Home',
                    description: 'This is where we will put some interesting things.'
                }
            })
            .when('/404', {
                templateUrl: 'views/error/404.jade',
                page: {
                    title: '404',
                    description: 'Whoops looks like we cannot find that page sorry',
                    keywords: ''
                }
            })
            .when('/500', {
                templateUrl: 'views/error/500.jade',
                page: {
                    title: '500',
                    description: 'Uh-Oh looks like a 500 error.',
                    keywords: ''
                }
            });

        $routeProvider.otherwise({redirectTo: '/'});

    }]);

};
