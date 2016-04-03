angular.module('myApp').factory('appService', function($http, config) {

    var _appService = function() {
        return $http.get(config.baseUrl + '/appService');
    };

    return {
        appService: _appService
    };

});
