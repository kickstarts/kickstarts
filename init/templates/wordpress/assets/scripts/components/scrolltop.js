var scrolltop = function(target) {

  $(target).on('click', function(e) {
      e.preventDefault();
      $('body, html').stop().animate({ scrollTop: 0 }, 400);
  });

};

module.exports = scrolltop;
