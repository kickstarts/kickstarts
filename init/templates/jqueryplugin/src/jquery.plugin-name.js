;(function ($, window, document, undefined) {

    'use strict';

    // Setup Plugin
    var pluginName  = 'plugin-name',
        defaults    = {
            propertyName: 'value'
    };


    // Constructor
    function Plugin(element, options) {

        this.element    = element;
        this.settings   = $.extend({}, defaults, options);
        this._defaults  = defaults;
        this._name      = pluginName;
        this.init();

    }


    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {

        init: function() {

            this.methodFoo(this.element, this.settings);
            this.methodBar(this.element, this.settings);
            // ...
            console.log('Plugin Initialized!');

        },

        methodFoo: function() {
            // code goes here
        },

        methodBar: function() {
            // code goes here
        }

    });


    // Plugin Wrapper
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
