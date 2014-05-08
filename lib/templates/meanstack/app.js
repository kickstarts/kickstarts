
'use strict';

///////////////////////////////////////////
// MODULE DEPENDENCIES                   //
///////////////////////////////////////////

var express        = require('express'),
    http           = require('http'),
    path           = require('path'),
    favicon        = require('static-favicon'),
    logger         = require('morgan'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),

    mongoose       = require('mongoose'),
    dbConnect      = mongoose.connection,

    config         = require('./app/config'),
    models         = require('./app/init/models'),
    controllers    = require('./app/init/controllers'),
    routes         = require('./app/init/routes'),

    app            = express();


///////////////////////////////////////////
// SETUP EXPRESS                         //
///////////////////////////////////////////

app.set('port', process.env.PORT || config.app.port);
app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', config.app.root + '/views');

app.use(favicon('public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(config.app.root, 'public')));
app.use(express.static(path.join(config.app.root, 'public')));

if ('development' === config.env) {
    console.log('configure stuff here');
}


///////////////////////////////////////////
// SETUP DATABASE                        //
///////////////////////////////////////////

mongoose.connect(config.db.path);

dbConnect.on('open', function() {
    console.log('✔ Connected to Mongoose...');
});
dbConnect.once('error', function () {
    console.error('✖ MONGO SERVER NOT STARTED!');
});


///////////////////////////////////////////
// BOOTSTRAP APP                         //
///////////////////////////////////////////

// Models
models.initialize();

// Controllers
controllers.initialize();

// Routes
routes.initialize(app);


///////////////////////////////////////////
// START SERVER                          //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
