///////////////////////////////////////////
// INITIALIZE APPLICATION                //
///////////////////////////////////////////

'use strict';

// Requires
var _        = require('lodash'),
    $        = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var Models = require('./models')(Backbone),
    Views  = require('./views')(_, Backbone, Models);

// Start the router
require('./router')(Backbone, Views);

Backbone.history.start();
