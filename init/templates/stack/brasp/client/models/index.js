///////////////////////////////////////////
// BOOTSTRAP MODELS                      //
///////////////////////////////////////////

module.exports = function (Backbone) {

    'use strict';

    var Models = {};

    Models.Foo = Backbone.Model.extend({
        idAttribute: 'name',
        defaults: { name: '' }
    });

    Models.Foos = Backbone.Collection.extend({
        url: '/foos',
        model: Models.Foo
    });

    // Bootstrap other models
    // require('./model')(Models);

    return Models;

};
