///////////////////////////////////////////
// VIEW - Index                          //
///////////////////////////////////////////

'use strict';

var APP = window.APP || {};

APP.TaskIndexView = Backbone.View.extend({

    // Constructor
    initialize: function (options) {

        // model is passed through
        this.tasks = options.tasks;
        this.tasks.bind('reset', this.addAll, this);

    },

    // Populate the html to the dom
    render: function () {

        this.$el.html($('#indexTemplate').html());
        this.addAll();
        return this;

    },

    addAll: function () {

        // Clear out the container each time you render index
        this.$el.find('tbody').children().remove();
        _.each(this.tasks.models, $.proxy(this, 'addOne'));

    },

    addOne: function (task) {

        var view = new APP.TaskRowView({
            tasks: this.tasks,
            task: task
        });

        this.$el.find('tbody').append(view.render().el);

    }

});

