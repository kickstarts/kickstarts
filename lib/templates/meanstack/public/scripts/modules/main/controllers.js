'use strict';

/* Controllers */

var mainController =  angular.module('main.controllers', []);

mainController.controller('MainCtrl1', function ($scope, $http) {

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

});

mainController.controller('MainCtrl2', function ($scope) {

    // Write your controller here

});

mainController.controller('MainCtrl3', function ($scope) {

    // Write your controller here

});


