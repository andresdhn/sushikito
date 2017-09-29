
/* ==========================================================================
   Navigation
   ========================================================================== */

$(document).ready( function () {
    $('.navbar-toggle, .navbar-nav a').on ('click', function (e) {
        // e.preventDefault(); 
        collapseNavBar(); 
    });

    function collapseNavBar() {
        $('.navbar').toggleClass('open'); 	
    }; 

});

// =====================================================================
// Smooth scrolling to anchor in a page 
// @url: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// =====================================================================
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