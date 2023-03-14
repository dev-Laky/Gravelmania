'use strict';

(function ($) {

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/;";
        /*console.log(document.cookie);*/
    }

    document.getElementById("submit-cookie-delete").addEventListener('click',function (){
        /* Cookie remove */
        document.cookie = "cookies=true; max-age=0;";
        console.log("cookies: " + document.cookie);
        window.location.reload();
    });

    document.getElementById("submit-cookies-datenschutz").addEventListener('click',function(){
        setCookie("cookies", "true", 365);
    }); 

})(jQuery);