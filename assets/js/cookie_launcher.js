'use strict';

(function ($) {

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/;";
        /*console.log(document.cookie);*/
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    
    document.getElementById("submit-cookies").addEventListener('click',function (){
        setCookie("cookies", "true", 365);
    });

    window.onload = function() {
        let cookie = getCookie("cookies");
        if(cookie != "true"){
                $(document).ready(function(){
                    $("#cookieconsent3").modal('show');
                });
            }
            else {
                console.log("valid cookie");
            }
        };

})(jQuery);