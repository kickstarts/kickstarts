// =====================================================
// Utils
// =====================================================

'use strict';

// Modules
var sh   = require('shelljs'),
    logs = require('./logs');

/**
 * Show initial message
 *
 * @return {String}
 * @method welcome
 */

exports.welcome = function () {

    logs.cls;
    logs('Welcome to Build Tool...', 'info');
    logs.nl;

};


/**
 * Show Instructions
 *
 * @return {String}
 * @method help
 */

exports.help = function () {

    sh.cat('../data/help.txt');

};
