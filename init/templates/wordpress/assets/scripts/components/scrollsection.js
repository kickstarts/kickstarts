var scrollingTo = function(id) {
  var $top = $(id).offset().top;
  var $header = $('.header').height();
  $('body, html').stop().animate({ scrollTop: ($top - ($header + 20) ) }, 800);
}

$('a[data-action=\"scroll\"]').on('click', function(e) {
  var $target = $(this).attr('href');
  e.preventDefault();
  scrollingTo($target);
});


module.exports = scrollingTo;
