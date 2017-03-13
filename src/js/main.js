

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

	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();

		img1.src = './img/bg.jpg';
		img2.src = './img/bg2.jpg';
		img3.src = './img/bg3.jpg';
		img4.src = './img/bg4.jpg';
		img5.src = './img/bg5.jpg';
		img6.src = './img/bg6.jpg';
			
	}

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
	}, 6000);
	
}); 