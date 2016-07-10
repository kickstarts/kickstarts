///////////////////////////////////////////
// MAIN APP                              //
///////////////////////////////////////////

'use strict';

// Dependencies
require('angular/angular');
require('angular-route/angular-route');

var _       = require('lodash'),
    config  = require('../config/app'),
    app     = angular.module(config.appName, config.appDeps);

// Bootstrap Routes
require('./routes')(app);

// Bootstrap Modules (Controllers, Directives, Services, Filters)
_.forIn(config.appModules, function (requireVal, module) {
    var moduleName = config.appName + '.' + module;
    requireVal(angular.module(moduleName, []));
    config.appDeps.push(moduleName);
});

// Initialize Application
require('./init')(angular, app, config.appName);
