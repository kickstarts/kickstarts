///////////////////////////////////////////
// USER API ROUTES                       //
///////////////////////////////////////////

// Require API Controllers
var users = require('../controllers/api/user');

module.exports = function(app) {

    'use strict';

    // User API
    app
        .param('id', users.getId)
        .get('/', users.index)
        .get('/new', users.new)
        .post('/', users.create)
        .get('/:id', users.find)
        .get('/:id/edit', users.edit)
        .post('/:id/edit', users.update)
        .get('/:id/delete', users.delete);

};

