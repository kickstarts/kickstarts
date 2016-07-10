/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var APP = (function() {

        var obj = obj || {};

        // -----------------------------------
        // PRIVATE METHODS
        // -----------------------------------
        obj._foo = function() {
        // code goes here
        };

        // -----------------------------------
        // PUBLIC METHODS
        // -----------------------------------
        obj.bar = function() {
        // code goes here
        };

        // -----------------------------------
        // INITIALIZE MODULE
        // -----------------------------------
        return {
            init: obj.bar
        };

    })();

    // Global
    window.APP = APP;

})(window, document);
