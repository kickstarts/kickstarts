///////////////////////////////////////////
// BOOTSTRAP APP                         //
///////////////////////////////////////////

(function() {
  'use strict';

  angular
    .module('app', [

      // DEPENDENCIES
      'ui.router',
      'ngMessages',
      'ngResource',
      'ngSanitize',
      'ngAnimate',

      // MODULES
      'app.services',
      'app.directives',

      // CONTROLLERS
      'users.controller',

      // ROUTES
      'app.routes'

    ]);

}());
