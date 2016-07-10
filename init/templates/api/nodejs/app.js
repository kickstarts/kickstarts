'use strict';

///////////////////////////////////////////
// MODULES & CONFIGURATION               //
///////////////////////////////////////////

// Packages needed for Express 4.x
var express      = require('express'),                  // https://npmjs.org/package/express
    favicon      = require('static-favicon'),           // https://github.com/expressjs/favicon
    session      = require('express-session'),          // https://github.com/expressjs/session
    logger       = require('morgan'),                   // https://github.com/expressjs/morgan
    cookieParser = require('cookie-parser'),            // https://github.com/expressjs/cookie-parser
    bodyParser   = require('body-parser'),              // https://github.com/expressjs/body-parser
    // methodOverride    = require('method-override'),  // https://github.com/expressjs/method-override
    compress     = require('compression'),              // https://github.com/expressjs/compression
    errorHandler = require('errorhandler');             // https://github.com/expressjs/errorhandler

// Additional packages
var http       = require('http'),                   // http://nodejs.org/docs/v0.10.25/api/http.html
    fs         = require('fs'),                     // http://nodejs.org/docs/v0.10.25/api/fs.html
    path       = require('path'),                   // http://nodejs.org/docs/v0.10.25/api/path.html
    stylus     = require('stylus'),                 // https://github.com/LearnBoost/stylus
    nib        = require('nib'),                    // https://github.com/visionmedia/nib
    mongoose   = require('mongoose'),               // https://npmjs.org/package/mongoose
    winston    = require('winston'),                // https://npmjs.org/package/winston
    MongoStore = require('connect-mongo')(session); // https://npmjs.org/package/connect-mongo

// Initial Contiguration
var config = require('./config/app'),   // Get configuration
    db     = mongoose.connection,       // Start Mongoose
    app    = express(),                 // Start Express
    server = http.createServer(app);    // Start Server

// Connect Database
mongoose.connect(config.db.host);



///////////////////////////////////////////
// SETUP LOGGING                         //
///////////////////////////////////////////

if (config.app.logStatus) {
    winston.add(winston.transports.File, {
        filename: config.app.logFile
    });
}

winston.remove(winston.transports.Console);



///////////////////////////////////////////
// SETUP EXPRESS                         //
///////////////////////////////////////////

// Set Template Locals
app.locals.application = config.locals.name;
app.locals.version = config.locals.version;
app.locals.description = config.locals.description;
app.locals.author = config.locals.author;
app.locals.keywords = config.locals.keywords;
app.locals.moment = require('moment');
app.locals.pretty = false;
app.locals.compileDebug = false;

// Settings for development
if (config.app.env === 'development') {
    app.locals.pretty = true;
    app.locals.compileDebug = true;
    app.use(logger('dev'));
} else {
    // Stream Express Logging to Winston
    app.use(logger({
        stream: {
            write: function(message, encoding) {
                winston.info(message);
            }
        }
    }));
}

// Set Port
app.set('port', process.env.PORT || config.app.port);



///////////////////////////////////////////
// SETUP MIDDLEWARES                     //
///////////////////////////////////////////

// Favicon
app.use(favicon('public/favicon.ico'));

// Jade Config
app.set('view engine', 'jade');
app.set('view options', {
    layout: true
});
app.set('views', config.app.views);

// Sytlus Config
var compile = function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .set('debug', true)
        .use(nib());
};

app.use(stylus.middleware({
    src: path.join(__dirname, 'app'),
    dest: path.join(__dirname, 'public'),
    compile: compile
}));

// Enable If behind nginx server
// app.enable('trust proxy');

// Compress response data with gzip / deflate.
app.use(compress());

// Body parsing middleware supporting.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Simulate DELETE and PUT
app.use(methodOverride());

// Session (use a cookie and persist session in Mongo)
app.use(cookieParser(config.session.secret));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.session.secret,
    key: 'sessionId',
    cookie: {
        httpOnly: true,
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        mongoose_connection: db,
        auto_reconnect: true
    })
}));

// Static folder
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: config.session.maxAge
}));



///////////////////////////////////////////
// BOOTSTRAP ROUTES                      //
///////////////////////////////////////////

// Include routes
var bootRoutes = function bootRoutes() {
    function init(path) {
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + '/' + file,
                stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$)/.test(file)) {
                    require(newPath)(app);
                }
            } else if (stat.isDirectory()) {
                init(newPath);
            }
        });
    }
    init(config.app.routes);
};

bootRoutes();



///////////////////////////////////////////
// ERROR HANDLING                        //
///////////////////////////////////////////

// Handle 404 Errors
app.use(function(req, res, next) {
    winston.warn('404 Warning. URL: ' + req.url + '\n');
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        res.render('error/404', {
            url: req.url
        });
        return;
    }
    // respond with json
    if (req.accepts('json')) {
        res.send({
            error: 'Not found'
        });
        return;
    }
    // default to plain-text. send()
    res.type('txt').send('Error: Not found');
});

// Handle 403 Errors
app.use(function(err, req, res, next) {
    if (err.status === 403) {
        winston.error('403 Not Allowed. ' + err + '\n');
        // Respond with HTML
        if (req.accepts('html')) {
            res.status(err.status);
            res.render('error/403', {
                error: err,
                url: req.url
            });
            return;
        }
        // Respond with json
        if (req.accepts('json')) {
            res.send({
                error: 'Not Allowed!'
            });
            return;
        }
        // Default to plain-text. send()
        res.type('txt').send('Error: Not Allowed!');
    } else {
        // Since the error is not a 403 pass it along
        return next(err);
    }
});

// Handle 500 Errors (really anything not handled above)
// development will print stacktrace
if (config.app.env === 'development') {
    app.use(function(err, req, res, next) {
        winston.error(err.status || 500 + ' ' + err + '\n');
        res.status(err.status || 500);
        res.render('error/500', {
            error: err,
        });
    });
}

// Production error handler (no stacktraces leaked to public!)
app.use(function(err, req, res, next) {
    winston.error(err.status || 500 + ' ' + err + '\n');
    res.status(err.status || 500);
    res.render('error/500', {
        error: {},
    });
});

// Final error catch-all just in case...
if (config.app.env === 'development') {
    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
}



///////////////////////////////////////////
// SETUP DATABASE                        //
///////////////////////////////////////////

db.on('error', function() {
    winston.error('MongoDB connection error!');
    console.error('✗ MongoDB connection error! Please make sure MongoDB is running.'.red.bold);
    process.exit(0);
});

db.on('open', function() {
    winston.info('MongoDB connected!');
    console.log('✓ MongoDB connected to %s', config.db.host.green.bold);
});



///////////////////////////////////////////
// START SERVER                          //
///////////////////////////////////////////

server.listen(app.get('port'), function() {

    // Log on Start
    winston.info(
        config.locals.name + ' listening on port ' + app.get('port'),
        'in ' + app.settings.env + ' mode.'
    );
    console.log(
        '\n✓ ' + config.locals.name + ' listening on port ' + app.get('port').toString().green.bold,
        'in ' + app.settings.env.green.bold + ' mode.',
        '\n✓ Hint: ' + 'Ctrl+C'.green.bold + ' to shut down.'
    );

    // Exit on CTRL+C
    process.on('SIGINT', function() {
        winston.info('MongoDB has shutdown!');
        winston.info(config.locals.name + ' has shutdown.');
        console.log('\n✗ MongoDB disconnected from %s. App has shutdown.', config.db.host.red.bold);
        console.log('✗ %s has shutdown', config.locals.name.red.bold);
        console.log('✗ %s was running for %s seconds.', config.locals.name, Math.round(process.uptime()).toString().cyan.bold);
        process.exit(0);
    });
});

module.exports = app;
