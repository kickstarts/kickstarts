///////////////////////////////////////////
// INDEX PAGE ROUTES                     //
///////////////////////////////////////////

// Require Pages Controllers
var index = require('../controllers/pages/index');

module.exports = function(app) {

    'use strict';

    // Home
    app.get('/', index.main);

};

