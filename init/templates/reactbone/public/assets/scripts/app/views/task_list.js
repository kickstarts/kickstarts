///////////////////////////////////////////
// VIEW - List                           //
///////////////////////////////////////////

'use strict';

var APP = window.APP || {};

APP.TaskListView = Backbone.View.extend({

    // Constructor
    initialize: function (options) {
        this.task = options.task;
    },

    // Populate the html to the dom
    render: function () {
        this.$el.html(_.template($('#listTemplate').html(), this.task.toJSON()));
        return this;
    }
});

