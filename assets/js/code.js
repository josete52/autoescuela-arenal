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

  // Hamburger menu toggle
  $('#headerHamburger').on('click keypress', function(e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      $('#headerMenu').toggleClass('show');
    }
  });
  // Close menu when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#headerMenu, #headerHamburger').length) {
      $('#headerMenu').removeClass('show');
    }
  });
  // Close menu on Escape
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      $('#headerMenu').removeClass('show');
    }
  });
});
