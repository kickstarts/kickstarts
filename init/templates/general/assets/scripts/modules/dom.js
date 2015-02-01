//
// DOM MANIPULATION
// --------------------------------------------

module.exports = function() {

    'use strict';

    var $onlyMobile     = $('.visible-phone, .hidden-tablet, .hidden-desktop'),
        $onlyTablet     = $('.visible-tablet, .hidden-phone, .hidden-desktop'),
        $onlyDesktop    = $('.visible-desktop, .hidden-phone, .hidden-tablet'),

        $windowWidth    = $(window).width(),
        $mobileWidth    = parseInt('767px', 10),

        $navAgent       = navigator.userAgent.toLowerCase(),
        $mobileTypes    = $navAgent.match(/(iphone|ipod|blackberry|android|palm|iemobile)/);

    if ($windowWidth <= $mobileWidth || $mobileTypes) {
        $onlyTablet.remove();
        $onlyDesktop.remove();
    } else {
        $onlyMobile.remove();
    }

    console.log('DOM Manipulation successfully initialized!');

};
