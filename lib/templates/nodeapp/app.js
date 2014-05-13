
'use strict';

///////////////////////////////////////////
// MODULE DEPENDENCIES                   //
///////////////////////////////////////////

var http           = require('http'),
    fs             = require('fs'),
    path           = require('path'),
    express        = require('express'),
    stylus         = require('stylus'),
    nib            = require('nib'),
    favicon        = require('static-favicon'),
    logger         = require('morgan'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    config         = require('./config'),
    app            = express(),
    dbConnect      = mongoose.connection,
    root           = __dirname;


///////////////////////////////////////////
// SETUP EXPRESS                         //
///////////////////////////////////////////

var compile = function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .set('debug', true)
        .use(nib());
};

app.set('port', process.env.PORT || config.app.port);
app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', path.join(config.app.root, 'app/views'));
app.use(favicon('public/favicon.ico'));
app.use(logger('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(cookieParser());
app.use(stylus.middleware(
    {
        src: path.join(config.app.root, 'app/'),
        dest: path.join(config.app.root, 'public/'),
        compile: compile
    }
));
app.use(express.static(path.join(config.app.root, 'public')));

// Development ENV
if ('development' === config.env) {
    console.log('Development stuff goes here!');
}


///////////////////////////////////////////
// SETUP DATABASE                        //
///////////////////////////////////////////

// Connect
mongoose.connect(config.db.path);

// Events
dbConnect.on('open', function() {
    console.log('✔ Connected to %s', config.db.path);
});

dbConnect.once('error', function (err) {
    console.error('✖ MONGO SERVER NOT STARTED: %s', err);
});

dbConnect.on('disconnected', function () {
    console.log('✔ Disconnected from %s', config.db.path);
});

process.on('SIGINT', function() {
    dbConnect.close(function () {
        console.log('✔ Disconnected from %s. App was closed.', config.db.path);
        process.exit(0);
    });
});


///////////////////////////////////////////
// BOOTSTRAP APP                         //
///////////////////////////////////////////

// Models
var bootModels = function bootModels() {
    var modelsPath = root + '/app/models';
    function walk(path) {
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + '/' + file,
                stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);
            }
        });
    }
    walk(modelsPath);
};

// Controllers
var bootControllers = function bootControllers() {
    var controllersPath = root + '/app/controllers';
    function walk(path) {
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + '/' + file,
                stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);
            }
        });
    }
    walk(controllersPath);
};

// Routes
var bootRoutes = function bootRoutes() {
    var routesPath = root + '/app/routes';
    function init(path) {
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + '/' + file,
                stat    = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath)(app);
                }
            } else if (stat.isDirectory()) {
                init(newPath);
            }
        });
    }
    init(routesPath);
};

// Go for it! :)
bootModels();
bootControllers();
bootRoutes();


///////////////////////////////////////////
// START SERVER                          //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:%d', app.get('port'));
});
