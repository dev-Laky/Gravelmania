/*  ---------------------------------------------------
    Template Name: Manup
    Description: Manup Event HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {
    

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    // var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // get correct data from json file
    fetch('assets/data/dates.json')
        .then(response => response.json())
        .then(data => {
            get_data_proc(data);
        });
    
    function get_data_proc(data) {
        // get current path
        const currentPath = window.location.pathname;

        // seperate /.../file.html --> file.html
        var filename = currentPath.replace(/^.*[\\\/]/, '')

        // Use this for real timer date
        var timerdate = "2000/12/31";

        for (let i = 0; i < data.events.length; i++) {
            if(filename == data.events[i].name){
                timerdate = data.events[i].date;
            }
          }

        $("#countdown").countdown(timerdate, function(event) {
            $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Tage</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Stunden</p> </div>" + "<div class='cd-item item-3'><span>%M</span> <p>Minuten</p> </div>" /*+ "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"*/));
        });
    }
    

    

})(jQuery);