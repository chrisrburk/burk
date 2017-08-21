(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 92)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $('.video-player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

$(window).resize(function(){
  $('.video-player').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
});

autoPlayYouTubeModal();

function autoPlayYouTubeModal() {
    var trigger = $('.video-trigger');
    trigger.click(function () {
        var theModal = $(this).attr("href"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "&amp;autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' .close-modal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $('.modal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

})(jQuery); // End of use strict
