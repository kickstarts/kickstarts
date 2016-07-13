'use strict';

/**
 * @ngdoc function
 * @name app.route:ModuleRoute
 * @description
 * # ModuleRoute
 * Route of the app
 */

angular.module('app')
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/modules/module/module.html',
        controller: 'ModuleCtrl',
        controllerAs: 'vm'
      });

  }]);
