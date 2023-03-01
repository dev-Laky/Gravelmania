(function() {
    "use strict";

    // set all href of a certain id to a specified link
    function set_link(id, link) {
      const links = document.querySelectorAll(`#${id}`);
      for (let i = 0; i < links.length; i++) {
        links[i].href = link;
      }
    }

    // set all inner HTML of a certain id to a specified text
    function set_inner_html(id, text) {
      const objects = document.querySelectorAll(`#${id}`);
      for (let i = 0; i < objects.length; i++) {
        objects[i].innerHTML = text;
      }
    }

    // define an object that maps link IDs to URLs
    const linkUrls = {
      "insta-link-gravelmania": "https://www.instagram.com/gravelmania_cc/",
      "fb-link-gravelmania": "https://www.facebook.com/profile.php?id=100087873258036",
      "strava-link-gravelmania": "https://www.strava.com/clubs/1073987",
      "komoot-link-gravelmania": "https://www.komoot.de/user/gravelmaniacup"
    };

    // initialize all links via id
    for(const linkId in linkUrls){
      set_link(linkId, linkUrls[linkId]);
    }


    // define an object that maps link IDs to URLs
    const objectInnerHTML = {
      "example": "INNER HTML TEXT"
    };

    // initialize all objects via id
    for(const linkId in objectInnerHTML){
      set_inner_html(linkId, objectInnerHTML[linkId]);
    }
    
  })()