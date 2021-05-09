$(function () {
    $('.fd-in').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('fd-done');
      } else {
        $(this).stop().removeClass('fd-done');
      }
    });
  });