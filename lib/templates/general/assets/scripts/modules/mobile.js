//
// MOBILE
// --------------------------------------------

module.exports = function() {

    'use strict';

    var $target = $('.nav-mobile-btn');

    $target.on('click touchstart', function(e) {
        $('html').toggleClass('nav-mobile-active');
        e.preventDefault();
    });

    console.log('Mobile successfully initialized!');

};
