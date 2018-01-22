///////////////////////////////////////////
// INITIALIZE SCRIPT                     //
///////////////////////////////////////////

$(function() {

  'use strict';

  // -----------------------------------
  // Accessibility - WAI-ARAI Roles
  // -----------------------------------
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


  // -----------------------------------
  // Initialize Application
  // -----------------------------------
  var APP = (function() {

    var component = component || {};

    component.scrolltop = require('./components/scrolltop');
    component.scrollsection = require('./components/scrollsection');
    component.modals = require('./components/modals');

    return {
      scrolltop: component.scrolltop,
      scrollsection: component.scrollsection,
      modals: component.modals
    };

  })();

  window.APP = APP;

  APP.scrolltop();
  APP.scrollsection();
  APP.modals();

});
