
///////////////////////////////////////////
// Module Dependencies                   //
///////////////////////////////////////////

var express  = require('express');
var http     = require('http');
var path     = require('path');
var mongodb  = require('mongodb');
var mongoose = require('mongoose');
var app      = express();


///////////////////////////////////////////
// Setup Express                         //
///////////////////////////////////////////

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');
app.use(express.favicon('public/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// app.use(require('stylus').middleware(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
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


///////////////////////////////////////////
// Initialize Server                     //
///////////////////////////////////////////

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
