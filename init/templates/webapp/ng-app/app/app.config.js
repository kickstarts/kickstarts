///////////////////////////////////////////
// APP CONFIG                            //
///////////////////////////////////////////

(function() {

  'use strict';

  /**
   * @ngdoc configuration file
   * @name app.config:config
   * @description
   * # Config and run block
   * Configutation of the app
   */
  angular
    .module('app.config', [])
    .config(RouterConfig)
    .run(AppRun);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

  function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $urlRouterProvider
      .otherwise('/');

  }

  AppRun.$inject = ['$rootScope'];

  function AppRun($rootScope) {
    console.log('AngularJS is running...');
  }

})();
