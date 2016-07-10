///////////////////////////////////////////
// ABOUT PAGE ROUTE                      //
///////////////////////////////////////////

var about = require('../controllers/pages/about');

module.exports = function(app) {

    'use strict';

    app.get('/about', about.main);

};

