///////////////////////////////////////////
// APP ROUTES                            //
///////////////////////////////////////////

(function() {

  'use strict';

  angular
    .module('app.routes', [])
    .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        template: ''
      });

  }

})();
