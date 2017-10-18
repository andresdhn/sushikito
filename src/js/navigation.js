
/* ==========================================================================
   Navigation
   ========================================================================== */
var $ = require('jquery'); 

$(document).ready( function () {
    var navbar = $('.navbar'); 
    var toggler = navbar.find('.navbar-toggle'); 
    var navbarLink = navbar.find('.navbar-nav a'); 

    function collapseNavBar() {
        navbar.toggleClass('open');  
    }

    toggler.on ('click', collapseNavBar);
    navbarLink.on ('click', collapseNavBar);
});

// =====================================================================
// Smooth scrolling to anchor in a page 
// @url: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// =====================================================================

$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -80
        }, 1000);
        return false;
      }
    }
  });
});