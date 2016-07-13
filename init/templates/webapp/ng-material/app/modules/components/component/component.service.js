'use strict';

(function() {

  /**
   * @ngdoc function
   * @name app.service:componentService
   * @description
   * # componentService
   * Service of the app
   */

  angular
    .module('app')
    .factory('ComponentService', Component);

  Component.$inject = [];
  function Component ($http, $anotherDependency) {
    // code goes here...
  }

})();
