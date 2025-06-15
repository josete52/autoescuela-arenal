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
    var maxScroll = $carousel[0].scrollWidth - $carousel.outerWidth();
    var currentScroll = $carousel.scrollLeft();
    // If at or past the end, go to start
    if (currentScroll + imgWidth >= maxScroll - 5) {
      $carousel.animate({ scrollLeft: 0 }, 400);
    } else {
      $carousel.animate({ scrollLeft: currentScroll + imgWidth }, 300);
    }
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

  // GSAP reusable scroll animations
  if (window.gsap && window.ScrollTrigger) {
    // Enter from top
    gsap.utils.toArray('.anim-top').forEach(function(el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: -60,
        duration: 0.9,
        ease: 'power3.out',
      });
    });
    // Enter from left
    gsap.utils.toArray('.anim-left').forEach(function(el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -80,
        duration: 0.9,
        ease: 'power3.out',
      });
    });
    // Enter from right
    gsap.utils.toArray('.anim-right').forEach(function(el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 80,
        duration: 0.9,
        ease: 'power3.out',
      });
    });
    // Zoom in from opacity 0
    gsap.utils.toArray('.anim-zoom').forEach(function(el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.92,
        duration: 1.1,
        ease: 'power2.out',
      });
    });
  }
});
