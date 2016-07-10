///////////////////////////////////////////
// BOOTSTRAP VIEWS                       //
///////////////////////////////////////////

// REQUIRES
var indexTemplate = require('../templates/index.jade');

module.exports = function(_, Backbone, Models) {

    'use strict';

    var Views = Views || {};

    Views.Index = Backbone.View.extend({

        el: '#content',
        template: indexTemplate,

        initialize: function() {
            this.foo = new Models.Foo();
            this.foo.fetch({ success: _.bind(this.render, this) });
        },

        render: function() {
            this.$el.html(this.template({
                intro : 'Browserify is in tha house!',
                foo : this.foo.toJSON()
            }));
        }

    });

    // Bootstrap other views.
    require('./about')(_, Backbone, Views);

    return Views;

};
