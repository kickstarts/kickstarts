///////////////////////////////////////////
// INITIALIZE APP                        //
///////////////////////////////////////////

'use strict';

var $ = require('jquery');

module.exports = function (angular, app, appName) {
    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        delete $httpProvider.defaults.headers.post['Content-Type'];
    }]);

    app.config(['$locationProvider', function($locationProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]);

    window.bootstrap = function () {
        angular.bootstrap(document, [appName]);
    };

    window.init = function () {
        window.bootstrap();
    };

    $(document).ready(function () {
        if (window.location.hash === '#_=_') {
            window.location.hash = '';
        }
        window.init();
    });
};
