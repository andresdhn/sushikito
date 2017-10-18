
/* ==========================================================================
   Navigation
   ========================================================================== */

( function () {
    var navbar = document.querySelector('.navbar'); 
    var toggler = document.querySelector('.navbar-toggle'); 
    var navbarLink = document.querySelector('.navbar-nav a'); 

    function collapseNavBar() {
        navbar.classList.toggle('open');  
    }

    toggler.addEventListener ('click', collapseNavBar);
    navbarLink.addEventListener ('click', collapseNavBar);

})();

// =====================================================================
// Smooth scrolling to anchor in a page 
// @url: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// =====================================================================

var $ = require('jquery'); 

$(function() {
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