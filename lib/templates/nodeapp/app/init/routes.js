var index = require('../routes/index');

module.exports.initialize = function(app) {

    'use strict';

    app.get('/', index.index);
};
