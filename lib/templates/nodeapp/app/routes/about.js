///////////////////////////////////////////
// ABOUT PAGE ROUTES                     //
///////////////////////////////////////////

// Require About Controller
var about = require('../controllers/pages/about');

module.exports = function(app) {

    'use strict';

    // About
    app.get('/about', about.main);

};

