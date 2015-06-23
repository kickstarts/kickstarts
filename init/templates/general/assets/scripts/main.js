///////////////////////////////////////////
// MODULES & CONFIGURATION               //
///////////////////////////////////////////

// BOOTSTRAP
var initAffix       = require('./modules/affix'),
    initAlert       = require('./modules/alert'),
    initButton      = require('./modules/button'),
    initCarousel    = require('./modules/carousel'),
    initCollapse    = require('./modules/collapse'),
    initDropdown    = require('./modules/dropdown'),
    initModal       = require('./modules/modal'),
    initPopover     = require('./modules/popover'),
    initScrollspy   = require('./modules/scrollspy'),
    initTab         = require('./modules/tab'),
    initTooltip     = require('./modules/tooltip'),
    initTransition  = require('./modules/transition');

// CUSTOM


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

    // Initialize Bootstrap Modules
    initAffix();
    initAlert();
    initButton();
    initCarousel();
    initCollapse();
    initDropdown();
    initModal();
    initPopover();
    initScrollspy();
    initTab();
    initTooltip();
    initTransition();

    // Initialize Custom Modules

});
