
/* ==========================================================================
   Instagram
   ========================================================================== */


    var Instafeed = require("instafeed.js");
    var feed = new Instafeed({
        get: 'user',
        userId: '1488069419',
        accessToken: '1488069419.b773045.a708a07d1c4c40a981b955dae64e4e81',
        limit: 12,
        resolution: 'low_resolution',
        template: '<div class="carousel-cell" style="background-image:url({{image}})"><div class="cell-container"><div class="cell-textbox"><p>{{caption}}</p></div></div></div>',
        after: function () {
            var flickity = require('flickity');
            var flickityOptions = {'contain': true, 'wrapAround': true };
            var gallery = new flickity(document.getElementById('instafeed'), flickityOptions);        
        }
    });
    feed.run();

    

