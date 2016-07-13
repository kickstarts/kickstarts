(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:ModuleCtrl
   * @description
   * # ModuleCtrl
   * Controller of the app
   */

  angular
    .module('app')
    .controller('ModuleCtrl', ModuleCtrl);

  ModuleCtrl.$inject = ['moduleService'];

  function ModuleCtrl(moduleService) {
    // code goes here...
  }

})();
