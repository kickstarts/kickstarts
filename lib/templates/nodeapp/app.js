
'use strict';

///////////////////////////////////////////
// Module Dependencies                   //
///////////////////////////////////////////

var config   = require('./app/config'),
    express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    mongoose = require('mongoose'),
    app      = express();


///////////////////////////////////////////
// Setup Express                         //
///////////////////////////////////////////

app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'jade');
// app.set('view options', { layout: true });
// app.set('views', config.app.root + '/views');

app.configure(function() {
    // app.use(express.favicon('public/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    // app.use(require('stylus').middleware(path.join(config.app.root, 'public')));
    app.use(express.static(path.join(config.app.root, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler(
        {
            dumpExceptions: true,
            showStack: true
        }
    ));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

///////////////////////////////////////////
// Setup Database                        //
///////////////////////////////////////////

var db = mongoose.connection;

mongoose.connect(config.db.path);

db.on('open', function() {
    console.log('Connected to Mongoose...');
});
db.once('error', function () {
    console.error('MONGO SERVER NOT STARTED!');
});


///////////////////////////////////////////
// Bootstrap                             //
///////////////////////////////////////////

// Models
var models = require('./app/init/models');
models.initialize();

// Controllers
var controllers = require('./app/init/controllers');
controllers.initialize();

// Routes
var routes = require('./app/init/routes');
routes.initialize(app);


///////////////////////////////////////////
// Initialize Server                     //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
