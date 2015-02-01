///////////////////////////////////////////
// APP CONFIGURATION                     //
///////////////////////////////////////////

var path = require('path'),
    pkg  = require('../package'),
    hour = 3600000,
    day  = (hour * 24),
    week = (day * 7);

module.exports = {

    // SERVER CONFIG
    app: {
        env:         process.env.NODE_ENV || 'development',
        logStatus:   process.env.LOGGING  || false,
        logFile:     process.env.LOGFILE  || 'app.log',
        analytics:   process.env.GA       || 'UA-XXXXXXXX-X',
        port:        process.env.PORT     || 3000,
        host:        'http://localhost',
        routes:      path.join(__dirname, '../server/routes'),
        views:       path.join(__dirname, '../server/views')
    },
    db: {
        host:        process.env.MONGODB_URL || 'localhost'
    },
    session: {
        secret:      process.env.SESSION_SECRET  || 'nLz8gSz7DHv3fDU3LIp60G',
        maxAge:      process.env.SESSION_MAX_AGE || week
    },
    locals: {
        name:        pkg.name,
        version:     pkg.version,
        description: pkg.description,
        author:      pkg.author,
        keywords:    pkg.keywords
    },

    // CLIENT CONFIG
    appName: 'myApp',
    appDeps: [
        'ngResource',
        'ngRoute',
        'myApp.config'
    ],
    appModules: {
        'controllers': require('../client/scripts/controllers'),
        'services': require('../client/scripts/services'),
        'filters': require('../client/scripts/filters'),
        'directives': require('../client/scripts/directives')
    }
};
