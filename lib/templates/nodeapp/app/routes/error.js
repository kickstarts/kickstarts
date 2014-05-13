///////////////////////////////////////////
// HTTP STATUS 500 ROUTE                 //
///////////////////////////////////////////

// Require HTTP Status Controllers
var http404 = require('../controllers/handlers/404'),
    http500 = require('../controllers/handlers/500');

module.exports = function(app) {

    'use strict';

    // Catch 404 and forwarding to error handler
    app.get(http404.notfound);

    // Error handler
    if (app.get('env') === 'development') {
        app.get(http500.internal);
        app.locals.pretty = true;
    }

    app.get(http500.internal);

};

