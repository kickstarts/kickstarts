module.exports = function() {

    angular.module('myApp').value('config', {

        appTitle: 'My App Name',
        baseUrl: 'http://SET_YOUR_HOST:SET_YOUR_PORT'

    });

};
