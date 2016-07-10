///////////////////////////////////////////
// MODULES & CONFIGURATION               //
///////////////////////////////////////////


// Initialize Bootstrap Modules
// require('./modules/bootstrap/affix');
// require('./modules/bootstrap/alert');
// require('./modules/bootstrap/button');
// require('./modules/bootstrap/carousel');
// require('./modules/bootstrap/collapse');
// require('./modules/bootstrap/dropdown');
// require('./modules/bootstrap/modal');
// require('./modules/bootstrap/popover');
// require('./modules/bootstrap/scrollspy');
// require('./modules/bootstrap/tab');
// require('./modules/bootstrap/tooltip');
// require('./modules/bootstrap/transition');



///////////////////////////////////////////
// INITIALIZE SCRIPT                     //
///////////////////////////////////////////

$(function() {

    'use strict';

    // Accessibility - WAI-ARAI Roles
    $('nav').attr('role','navigation');
    $('nav ul li a').attr('role','menuitem');
    $('.header').attr('role','banner');
    $('.footer').attr('role','contentinfo');
    $('section').attr('role','region');
    $('main').attr('role','main');
    $('.sidebar').attr('role','complementary');
    $('.alert').attr('role','alert');
    $('a.btn').attr('role','button');
    $('details, figure').attr('role', 'group');
    $('.nav-tabs li').attr('role', 'presentation');
    $('.nav-tabs li a').attr('role','tablist');
    $('.tab-pane').attr('role','tabpanel');
    $('.search-form').attr('role','search');

    // Initialize Custom Modules

});
