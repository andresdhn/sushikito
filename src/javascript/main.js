

/* 
 * =====================================================================
 * sushikito.fr
 * main.js
 * Base rules and style guide for this website
 * Mar 2017
 * @author:  Andres Hernandez <hernandez.andres.d@gmail.com>
 * @copyright: sushikito.fr
 *
 * =====================================================================
 */

$(document).ready( function () {
	var images = [
	  './img/bg.jpg',
	  './img/bg2.jpg',
	  './img/bg3.jpg',
	  './img/bg4.jpg',
	  './img/bg5.jpg',
	  './img/bg6.jpg'
	]

	var i = 0;
	setInterval(function() {
	      $('.wrap').css({'background': "url(" + images[i] + ") no-repeat center center fixed" }) ;
	      i = i + 1;
	      if (i == images.length) {
	        i =  0;
	      }
	}, 4000);

}); 
