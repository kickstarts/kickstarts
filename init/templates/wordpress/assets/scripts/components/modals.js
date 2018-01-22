var modal = function(target, state) {
  if (state === 'show') {
    var showHandler = target.replace('show-', '');
    $(target).on('click', function(e) {
      e.preventDefault();

      if ($(showHandler).hasClass('fadeOut')) $(this).removeClass('fadeOut');

      $(showHandler)
        .removeClass('is-hidden')
        .removeClass('fadeOut')
        .addClass('fadeIn');

      $('body, html').toggleClass('no-scroll');
    });
  }

  if (state == 'hide') {
    $(target).on('click', function(e) {
      e.preventDefault();

      $('.modal')
        .removeClass('fadeIn')
        .addClass('fadeOut')
        .addClass('is-hidden');

      $('body, html').toggleClass('no-scroll');
    });
  }
};

module.exports = modal;
