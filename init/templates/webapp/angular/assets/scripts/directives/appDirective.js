angular.module('myApp').directive('appDirective', function() {

    return {
        templateUrl: 'view/somedirective.html',
        replace: true,
        restrict: 'E',
        scope: {
            title: '@',
            description: '@'
        }
    }

});
