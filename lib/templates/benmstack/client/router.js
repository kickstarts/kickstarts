///////////////////////////////////////////
// ROUTER                                //
///////////////////////////////////////////

module.exports = function(Backbone, views) {

    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '': 'index',
            'about': 'about'
        },

        index: function() {
            return new views.Index();
        },
        about: function() {
            return new views.About();
        }

    });

    return new Router();

};
