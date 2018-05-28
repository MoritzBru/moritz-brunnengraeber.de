(function($) {
  "use strict"; // Start of use strict

//==============================================================================
// Calculate age
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  $("#age").html(getAge("1991-02-20"));

//==============================================================================
// Smooth scrolling
  // define easing function (http://gsgd.co.uk/sandbox/jquery/easing/)
  jQuery.extend( jQuery.easing,
  {
  	easeInOutExpo: function (x, t, b, c, d) {
  		if (t==0) return b;
  		if (t==d) return b+c;
  		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  	}
  });

  // on link click -> scroll to position
  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function(evt) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        evt.preventDefault();
        $("html, body").animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("a.js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

//==============================================================================
// Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 57
  });

//==============================================================================
// Collapse Navbar
  function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").removeClass("navbar-scroll-transparent");
    } else {
      $("#mainNav").addClass("navbar-scroll-transparent");
    }
  }
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

//==============================================================================
// Show elements that should load hidden
  $(document).ready(function() {
    $(".load-invisible").removeClass("load-invisible");
  });

//==============================================================================
// Tooltip
  $(function () {
    $("[data-toggle='tooltip']").tooltip()
  })

})(jQuery); // End of use strict
