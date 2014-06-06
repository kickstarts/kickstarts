// =====================================================
// Log Messages
// =====================================================

'use strict';

// Modules
var sh = require('shelljs'),
    cl = require('cli-color');

// Options
var warn  = cl.yellow,
    error = cl.red,
    done  = cl.green,
    info  = cl.cyan,
    cls   = cl.reset;


// Logs
module.exports = function (msg, type) {
    switch (type) {
    case 'error':
        sh.echo(error('✖ ' + msg));
        break;
    case 'warning':
        sh.echo(warn('! ' + msg));
        break;
    case 'info':
        sh.echo(info('! ' + msg));
        break;
    case 'done':
        sh.echo(done('✔ ' + msg));
        break;
    case 'cls':
        sh.echo(cls);
        break;
    case 'nl':
        sh.echo('\n');
        break;
    }
};
