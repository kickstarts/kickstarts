(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:moduleService
   * @description
   * # moduleService
   * Service of the app
   */

  angular.module('app')
    .factory('moduleService', moduleService);

  moduleService.$inject = ['$http'];

  function moduleService($http) {

    // var arr = [];
    // var obj = {};
    // var str = '';

    return {
      foo: foo
    };

    function foo() {
      return;
    }

  }

})();
