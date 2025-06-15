$(function() {
  var $carousel = $('#carouselGallery');
  var isDown = false;
  var startX, scrollLeft;

  $carousel.on('mousedown touchstart', function(e) {
    isDown = true;
    $carousel.addClass('active');
    startX = e.pageX || e.originalEvent.touches[0].pageX;
    scrollLeft = $carousel.scrollLeft();
  });

  $(document).on('mousemove touchmove', function(e) {
    if (!isDown) return;
    var x = e.pageX || e.originalEvent.touches[0].pageX;
    var walk = (startX - x);
    $carousel.scrollLeft(scrollLeft + walk);
  });

  $(document).on('mouseup touchend', function() {
    isDown = false;
    $carousel.removeClass('active');
  });

  $('#carouselLeft').on('click', function() {
    var imgWidth = $carousel.find('img').first().outerWidth(true);
    $carousel.animate({ scrollLeft: $carousel.scrollLeft() - imgWidth }, 300);
  });
  $('#carouselRight').on('click', function() {
    var imgWidth = $carousel.find('img').first().outerWidth(true);
    $carousel.animate({ scrollLeft: $carousel.scrollLeft() + imgWidth }, 300);
  });
});
