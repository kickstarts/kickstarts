///////////////////////////////////////////
// MODULES & CONFIGURATION               //
///////////////////////////////////////////

import $ from 'jquery';
import jQuery from 'jquery';
import bootstrap from 'twbs/bootstrap-sass';


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
    $('.tabs').attr('role','tablist');
    $('.search-form').attr('role','search');

    // Initialize Custom Modules

});