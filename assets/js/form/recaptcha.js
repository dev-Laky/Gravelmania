var onloadCallback = function() {
  grecaptcha.render('recaptcha', {
    'sitekey' : '6LcKjUElAAAAAF1Llm3C0bB-UDwzMj9Tui2AVPuk',
    'callback' : verifyCallback,
    'theme' : 'dark'
  });
};

var verifyCallback = function(response) {
  console.log(response)
};
