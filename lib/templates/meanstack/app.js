
'use strict';

///////////////////////////////////////////
// Module Dependencies                   //
///////////////////////////////////////////

var routes   = require('./app/routes'),
    config   = require('./config/config'),
    express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    mongoose = require('mongoose'),
    app      = express();


///////////////////////////////////////////
// Setup Express                         //
///////////////////////////////////////////

app.set('port', process.env.PORT || 3300);
app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

app.use(express.favicon('public/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}


///////////////////////////////////////////
// Setup Database                        //
///////////////////////////////////////////

mongoose.connect('mongodb://localhost/myapp');
mongoose.connection.on('open', function() {
    console.log('Connected to Mongoose...');
});


///////////////////////////////////////////
// Routes - Add all your routes here     //
///////////////////////////////////////////

routes.initialize(app);


///////////////////////////////////////////
// Initialize Server                     //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
