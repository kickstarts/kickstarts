///////////////////////////////////////////
// APP CONFIG                            //
///////////////////////////////////////////

var path = require('path'),
    pkg  = require('../package'),
    hour = 3600000,
    day  = (hour * 24),
    week = (day * 7);

module.exports = {
    app: {
        root:        __dirname,
        env:         process.env.NODE_ENV || 'development',
        logStatus:   process.env.LOGGING  || false,
        logFile:     process.env.LOGFILE  || 'app.log',
        analytics:   process.env.GA       || 'UA-44765020-2',
        host:        'http://localhost',
        port:        8080,
        routes:      path.join(__dirname, '../app/routes')
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
    }
};
