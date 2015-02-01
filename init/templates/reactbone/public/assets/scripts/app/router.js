///////////////////////////////////////////
// ROUTER                                //
///////////////////////////////////////////

'use strict';

var APP = window.APP || {};

APP.TaskRouter = Backbone.Router.extend({

    routes: {
        'task/add'      : 'add',
        'tasks/index'   : 'index',
        'task/:id/edit' : 'edit',
        'task/:id/view' : 'list'
    },

    // Constructor
    initialize: function (options) {

        this.tasks = options.tasks;
        this.index();

        // -- DEBUG ONLY! -----------------------------------
        this.tasks.bind('reset', this.updateDebug, this);
        this.tasks.bind('add', this.updateDebug, this);
        this.tasks.bind('remove', this.updateDebug, this);

    },


    updateDebug: function () {

        $('#output').text(JSON.stringify(this.tasks.toJSON(), null, 4));

    },


    add: function() {

        this.currentView = new APP.TaskAddView({
            tasks: this.tasks,
            task: new APP.TaskModel()
        });

        $('#primary-content').html(this.currentView.render().el);
    },


    edit: function(id) {

        var task = this.tasks.get(id);
        this.currentView = new APP.TaskEditView({task: task});
        $('#primary-content').html(this.currentView.render().el);

    },


    list: function(id) {

        var task = this.tasks.get(id);
        this.currentView = new APP.TaskListView({ task: task });
        $('#primary-content').html(this.currentView.render().el);

    },

    // Populate the html to the dom
    index: function() {

        this.currentView = new APP.TaskIndexView({ tasks: this.tasks });
        $('#primary-content').html(this.currentView.render().el);

        // we would call to the index with
        // this.tasks.fetch()
        // to pull down the index json response to populate our collection initially

    }

});
