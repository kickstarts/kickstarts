'use strict';

/* Controllers */

angular.module('main.controllers', [])
    .controller('MainCtrl1', function ($scope, $http) {

        $http({
            method: 'GET',
            url: '/api/name'
        })
        .success(function (data, status, headers, config) {

            $scope.name = data.name;

        })
        .error(function (data, status, headers, config) {

            $scope.name = 'Error!';

        });

    })
    .controller('MainCtrl2', function ($scope) {

        // write Ctrl here

    })
    .controller('MainCtrl3', function ($scope) {

        // write Ctrl here

});
