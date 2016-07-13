///////////////////////////////////////////
// BOOTSTRAP APP                         //
///////////////////////////////////////////

(function() {
  'use strict';

  /**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/
  angular
    .module('app', [

      // DEPENDENCIES
      'ui.router',
      'ngMessages',
      'ngResource',
      'ngSanitize',
      'ngAnimate',
      'ngAria',

      // MODULES
      'app.moduleName',

      // CONFIG
      'app.config'

    ]);

}());
