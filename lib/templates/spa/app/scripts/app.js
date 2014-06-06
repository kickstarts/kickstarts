///////////////////////////////////////////
// MAIN APP                              //
///////////////////////////////////////////

'use strict';

require('ng');
require('ngResource');
require('ngRoute');

var config  = require('../../../config/client'),
    _       = require('lodash'),
    ng      = angular.module(config.appName + '.config', []),
    app     = angular.module(config.appName, config.appDeps);


ng.factory('AppConfig', function () {
    return config;
});

_.forIn(config.appModules, function (requireVal, module) {
    var moduleName = config.appName + '.' + module;
    requireVal(angular.module(moduleName, []));
    config.appDeps.push(moduleName);
});

require('./routes')(app, config);
require('./init')(angular, app, config.appName);

