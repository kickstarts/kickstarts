///////////////////////////////////////////
// INITIALIZE ROUTES                     //
///////////////////////////////////////////

// Handlers
var http500 = require('../routes/handlers/500'),
    http404 = require('../routes/handlers/404'),

    // Pages
    index = require('../routes/pages/index'),
    about = require('../routes/pages/about'),

    // API
    login = require('../routes/api/login');


module.exports.initialize = function(app) {

    'use strict';

    ////////////////////
    // ERROR HANDLERS //
    ////////////////////

    // Catch 404 and forwarding to error handler
    app.get(http404.notfound);

    // Error handler
    if (app.get('env') === 'development') {
        app.get(http500.internal);
        app.locals.pretty = true;
    }

    app.get(http500.internal);


    ////////////////////
    // PAGES          //
    ////////////////////

    // Home
    app.get('/', index.main);

    // About
    app.get('/about', about.main);


    ////////////////////
    // API            //
    ////////////////////

    // Login
    app.route('/login')
        .get(login.main)
        .post(login.process);


};

