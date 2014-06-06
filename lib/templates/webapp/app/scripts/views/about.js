///////////////////////////////////////////
// ABOUT VIEW                            //
///////////////////////////////////////////

// Requires
var aboutTemplate = require('../templates/about.jade');

module.exports = function(_, Backbone, Views) {

    'use strict';

    Views.About = Backbone.View.extend({

        el: '#content',
        template: aboutTemplate,

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template());
        }

    });

};
