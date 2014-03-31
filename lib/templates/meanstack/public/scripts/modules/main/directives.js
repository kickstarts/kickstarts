'use strict';

/* Directives */

angular.module('main.directives', []).
    directive('appVersion', function (version) {
    return function(scope, el, attrs) {
        el.text(version);
    };
});
