///////////////////////////////////////////
// MODEL                                 //
///////////////////////////////////////////

'use strict';

var APP = window.APP || {};

APP.TaskModel = Backbone.Model.extend({

    // You can set any defaults you would like here
    defaults: {
        title       : '',
        description : '',
        author      : 'Vitor Britto'
    },

    validate: function (attrs) {

        var errors = {};

        if (!attrs.title) {
            errors.title = 'Please type a title for this note';
        }
        if (!attrs.description) {
            errors.description = 'You gotta write a description too';
        }
        if (!attrs.author) {
            errors.author = 'Please type the name of author';
        }
        if (!_.isEmpty(errors)) {
            return errors;
        }

    }

});

APP.TaskCollection = Backbone.Collection.extend({

    // Reference to this collection's model
    model: APP.TaskModel

});
