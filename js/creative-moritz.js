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
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Scroll reveal calls
  window.sr = ScrollReveal();
  var configScrollReveal = function() {
    var delay = isSmall() ? null : 200;

    sr.reveal(".sr-icons", {
      duration: 500,
      scale: 0.3,
      reset: true
    }, delay);
    sr.reveal(".sr-cards", {
      duration: 500,
      scale: 0.5,
      reset: true
    }, delay);
    sr.reveal(".sr-buttons", {
      duration: 500
    }, delay);
    sr.reveal(".sr-scroll-buttons", {
      origin: "top",
      distance: "1em",
      duration: 800,
      reset: true
    });
    sr.reveal(".sr-map", {
      duration: 500,
      scale: 0.9,
      reset: true,
      beforeReveal: function () {
        for (var i = 0; i < window.mapmarkers.length; ++i) {
          window.mapmarkers[i].setVisible(false);
        }
      },
      afterReveal: function() {
        for (var i = 0; i < window.mapmarkers.length; ++i) {
          window.mapmarkers[i].setAnimation(google.maps.Animation.DROP);
          window.mapmarkers[i].setVisible(true);
        }
      }
    });
    sr.reveal(".sr-left", {
      origin: "left",
      distance: "1em",
      duration: 1000
    });
    sr.reveal(".sr-right", {
      origin: "right",
      distance: "1em",
      duration: 1000
    });
    sr.reveal(".sr-top", {
      origin: "top",
      distance: "1em",
      duration: 1000
    });
    sr.reveal(".sr-bottom", {
      origin: "bottom",
      distance: "1em",
      duration: 1000
    });
  }

  // Configure ScrollReveal now
  configScrollReveal()

  //Function to check if browser id small/mobile (HACKY!!)
  function isSmall(){
      if ($(".navbar-toggler").css("display") == "none" ){
        return false
      } else {
        return true
      }
    }


  // Show elements that should load hidden
  $(document).ready(function() {
    $(".load-invisible").removeClass("load-invisible");
  });


  // Tooltip
  $(function () {
    $("[data-toggle='tooltip']").tooltip()
  })


  // Fancybox
  $("[data-fancybox=fancybox-images]").fancybox({
		loop: true,
		toolbar: true,
		protect: true,
		buttons: ["close"],
    clickContent: false,
    animationEffect : "zoom",
    btnTpl: {
      arrowLeft : "<button data-fancybox-prev class='fancybox-button fancybox-button--arrow_left' title='{{PREV}}'>" +
                    "<svg viewBox='0 0 40 40'>" +
                      "<path d='M13,20,25,32,13,20,25,8,13,20'/>" +
                    "</svg>" +
                  "</button>",
      arrowRight : "<button data-fancybox-next class='fancybox-button fancybox-button--arrow_right' title='{{NEXT}}'>" +
                     "<svg viewBox='0 0 40 40'>" +
                      "<path d='M27,20,15,8,27,20,15,32,27,20'/>" +
                     "</svg>" +
                   "</button>",
    }
	});
  $("[data-fancybox=fancybox-panos]").fancybox({
    toolbar: true,
    buttons: ["close"]
	});
  $("[data-fancybox=fancybox-legal-notice]").fancybox({
    toolbar: true,
    buttons: ["close"]
	});


  // Particles Masthead
  particlesJS.load("bg-particle", "js/particlesjs-config.json");


  // Cookie Consent
  window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#212529"
        },
        "button": {
          "background": "#ad1457"
        }
      },
      "theme": "edgeless",
      "content": {
        "message": "We use cookies to ensure you get the best experience and to analyse the website usage. You can <a class='text-secondary' href='https://cookiesandyou.com/' target='_blank'>learn more about cookies</a> or <a class='text-secondary' href='#fancybox-legal-notice'>read the legal notice</a>.",
        "dismiss": "OK!",
        "link": "",
        "href": ""
      },
      "onPopupOpen": function() {document.querySelector(".cc-compliance").classList.add("compensate-for-scrollbar");} // fix fancybox
    })
  });


})(jQuery); // End of use strict
