///////////////////////////////////////////
// ROUTES                                //
///////////////////////////////////////////

'use strict';

var _ = require('lodash');

module.exports = function (angular, routes) {
    angular.config(['$routeProvider',function ($routeProvider) {
        _.forIn(routes, function (routeParams, route) {
            $routeProvider.when(route,routeParams);
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
};
