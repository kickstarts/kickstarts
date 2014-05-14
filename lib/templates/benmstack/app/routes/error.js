///////////////////////////////////////////
// ERROR PAGE ROUTE                      //
///////////////////////////////////////////

var http403 = require('../controllers/error/403'),
    http404 = require('../controllers/error/404'),
    http500 = require('../controllers/error/500');

module.exports = function(app) {

    'use strict';

    // NOTE: These routes *only* exist to test error functionality.
    // They are not used under normal circumstances.

    app.get('/404', http404.main);
    app.get('/403', http403.main);
    app.get('/500', http500.main);

};
