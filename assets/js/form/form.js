(function() {
    "use strict";

    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('cLVG1V-rR2InIYDvN');
    })();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.querySelector('.loading').classList.add('d-block');
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_087y4mu', 'template_sph7s6l', this)
                .then(function() {
                    console.log('SUCCESS!');
                    document.querySelector('.loading').classList.remove('d-block');
                    document.querySelector('.sent-message').classList.add('d-block');
                }, function(error) {
                    console.log(error);
                    document.querySelector('.loading').classList.remove('d-block');
                    document.querySelector('.error-message').innerHTML = "Etwas ist schiefgelaufen... (Hat jemand einen Schlauch?)";
                    document.querySelector('.error-message').classList.add('d-block');
                });
        });
    }

  })();