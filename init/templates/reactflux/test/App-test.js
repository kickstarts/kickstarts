///////////////////////////////////////////
// TEST SETUP                            //
///////////////////////////////////////////

'use strict';

var App       = require('./../app/App.js'),
    React     = require('react/addons'),
    TestUtils = React.addons.TestUtils;

describe('App', function() {
    it('should be wrapped with a div', function() {
        var app = TestUtils.renderIntoDocument(App());
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});
