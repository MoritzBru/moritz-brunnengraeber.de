(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 57
  });


  // Collapse Navbar
  function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Scroll reveal calls
  function configScrollReveal() {
    var sr = ScrollReveal();
    var isSmall = ($(".navbar-toggler").css("display") != "none");
    var delay = isSmall ? null : 200;

    var dirs = ["left", "right", "top", "bottom"];
    dirs.forEach(function(dir) {
      sr.reveal(".sr-" + dir, {
        origin: dir,
        distance: "1rem",
        duration: 800,
        reset: true
      });
    });
    sr.reveal(".sr-scroll-buttons", {
      origin: "top",
      distance: "1rem",
      duration: 800,
      reset: true
    });
    sr.reveal(".sr-icons", {
      duration: 500,
      scale: 0.3,
      reset: true
    }, delay);
    sr.reveal(".sr-cards", {
      duration: 300,
      scale: 0.7,
      reset: true
    }, delay);
    sr.reveal(".sr-map", {
      duration: 300,
      scale: 0.7,
      reset: true,
      beforeReveal: function () {
        try {
          window.map_markers[0].getMap().fitBounds(window.map_bounds)
          window.map_markers.forEach(function(m) {
            m.setVisible(false);
          })
          if (window.map_infowindow) {
            window.map_infowindow.close();
          }
        } catch(err){}
      },
      afterReveal: function() {
        try {
          window.map_markers.forEach(function(m, idx) {
            window.setTimeout(function() {
              m.setAnimation(google.maps.Animation.DROP);
              m.setVisible(true);
            }, 200*idx);
          })
        } catch(err){}

      }
    });
    sr.reveal(".sr-buttons", {
      duration: 500,
      reset: true
    }, delay);
  }

  // Configure ScrollReveal now
  configScrollReveal();


  // Show elements that should load hidden
  $(document).ready(function() {
    $(".load-invisible").removeClass("load-invisible");
  });


  // Tooltip
  $(function () {
    $("[data-toggle='tooltip']").tooltip()
  })


  // Fancybox
  $("[data-fancybox='fancybox-images']").fancybox({
		loop: true,
		toolbar: true,
		protect: true,
		buttons: ["close"],
    clickContent: false,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    btnTpl: {
      arrowLeft: "<button data-fancybox-prev class='fancybox-button fancybox-button--arrow_left' title='{{PREV}}'>" +
                    "<svg viewBox='0 0 40 40'>" +
                      "<path d='M13,20,25,32,13,20,25,8,13,20'/>" +
                    "</svg>" +
                  "</button>",
      arrowRight: "<button data-fancybox-next class='fancybox-button fancybox-button--arrow_right' title='{{NEXT}}'>" +
                     "<svg viewBox='0 0 40 40'>" +
                      "<path d='M27,20,15,8,27,20,15,32,27,20'/>" +
                     "</svg>" +
                   "</button>",
    }
	});
  $("[data-fancybox='fancybox-panos'],[data-fancybox='fancybox-legal-notice']").fancybox({
    type: "iframe",
    toolbar: true,
    buttons: ["close"],
    animationEffect: "zoom-in-out"
	});


  // Particles Masthead
  particlesJS.load("bg-particle", "js/particlesjs-config.json");


  // Cookie Consent
  window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      container: $("#cookie-consent-container")[0],
      palette: {
        popup: {
          background: "#212529"
        },
        button: {
          background: "#ad1457"
        }
      },
      theme: "edgeless",
      content: {
        message: "We use cookies to ensure you get the best experience and to analyse the website usage. You can <a class='text-secondary' href='https://cookiesandyou.com/' target='_blank'>learn more about cookies</a> or <a class='text-secondary' href='#fancybox-legal-notice'>read the legal notice</a>.",
        dismiss: "OK!"
      },
      showLink: false,
      revokable: true,
      onPopupOpen: function() {document.querySelector(".cc-compliance").classList.add("compensate-for-scrollbar");} // fix fancybox
    })
  });


})(jQuery); // End of use strict
