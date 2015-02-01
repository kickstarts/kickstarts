///////////////////////////////////////////
// VIEW - Edit                           //
///////////////////////////////////////////

'use strict';

var APP = window.APP || {};

APP.TaskEditView = Backbone.View.extend({

    // Events Init
    events: {
        'click button.save': 'save'
    },

    // Constructor
    initialize: function (options) {
        this.task  = options.task;
    },

    save: function (event) {

        // This keeps the form from submitting
        event.stopPropagation();
        event.preventDefault();

        // Update our model with values from the form
        this.task.set({
            title: this.$el.find('input[name=title]').val(),
            author: this.$el.find('input[name=author]').val(),
            description: this.$el.find('textarea[name=description]').val()
        });

        // We would save to the server here with this.task.save();
        // Redirect back to the index
        window.location.hash = 'tasks/index';

    },

    // Populate the html to the dom
    render: function () {
        this.$el.html(_.template($('#formTemplate').html(), this.task.toJSON()));
        return this;
    }

});
