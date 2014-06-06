///////////////////////////////////////////
// INDEX PAGE ROUTE                      //
///////////////////////////////////////////

var index = require('../controllers/pages/index');

module.exports = function(app) {

    'use strict';

    app.get('/', index.main);

};

