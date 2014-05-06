
'use strict';

///////////////////////////////////////////
// Module Dependencies                   //
///////////////////////////////////////////

var express  = require('express'),
    http     = require('http'),
    path     = require('path'),
    mongodb  = require('mongodb'),
    mongoose = require('mongoose'),
    app      = express();


///////////////////////////////////////////
// Setup Express                         //
///////////////////////////////////////////

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}


///////////////////////////////////////////
// Setup Database                        //
///////////////////////////////////////////

// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   // go for it!
// });

// var schema = mongoose.Schema();
// var model = mongoose.model('foo', schema);


///////////////////////////////////////////
// Routes - Add all your routes here     //
///////////////////////////////////////////

var routes = require('./routes');

app.get('/', routes.index);
// app.get('/example', routes.example);


///////////////////////////////////////////
// Initialize Server                     //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
