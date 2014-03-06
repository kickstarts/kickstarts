/*
 * Required: phantomjs, async and system
 * Usage: phantomjs capture.js <dist> <project> <url>
 *
 * Options:
 * <dist>    : screen capture folder (ex.: ./captures).
 * <project> : project name.
 * <url>     : URL for screen capture.
 *
 */

"use strict";

var phantom,
    async   = require('async'),
    system  = require('system'),
    dist    = system.args[1],
    project = system.args[2],
    url     = system.args[3],
    sizes   = [         // Device Sizes
        [320, 480],     // 320x480   - iPhone (portrait)
        [480, 240],     // 480x240   - iPhone (landscape)
        [320, 568],     // 320x568   - Android
        [768, 1024],    // 768x1024  - iPad (portrait)
        [1024, 768],    // 1024x768  - iPad (landscape) and Desktops
        [1280, 800],    // 1280x800  - Common Desktops
        [1440, 900],    // 1440x900  - Wide Screens
        [1920, 1280]    // 1920x1280 - Large Screens
    ];

function capture(sizes, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: sizes[0],
        height: sizes[1]
    };
    page.zoomFactor = 1;
    page.open(url, function (status) {
        var savedir  = url.replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, ''),
            filename = project + '_' + sizes[0] + 'x' + sizes[1] + '.png';
        page.render('./' + dist + '/' + savedir + '/' + filename);
        page.close();
        callback.apply();
    });
}

async.eachSeries(sizes, capture, function (e) {
    if (e) {
        console.log(e);
    }
    console.log('All done!');
    phantom.exit();
});
