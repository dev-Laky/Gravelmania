'use strict';

(function ($) {

    document.getElementById("submit-cookie-delete").addEventListener('click',function (){
        /* Cookie remove */
        document.cookie = "cookies=true; max-age=0;";
        console.log("cookies: " + document.cookie);
        window.location.reload();
    });

    document.getElementById("submit-cookies-datenschutz").addEventListener('click',function (){
        setCookie("cookies", "true", 365);
    }); 

})(jQuery);