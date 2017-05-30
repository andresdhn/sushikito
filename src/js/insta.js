
/* ==========================================================================
   Instagram
   ========================================================================== */
    var Instafeed = require("instafeed.js");
    var feed = new Instafeed({
        get: 'user',
        userId: '1488069419',
        accessToken: '1488069419.b773045.a708a07d1c4c40a981b955dae64e4e81',
        limit:3,
        resolution: 'low_resolution',
        template: '<div class="grid-cell"><img src="{{image}}" alt=""/></div>'
    });
    feed.run();

