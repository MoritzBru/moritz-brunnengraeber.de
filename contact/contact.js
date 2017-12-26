$(function () {
  "use strict";

  // Autoresize textares
  autosize($('textarea'));

  var form = $('#contact_form')[0];

  // Custom JavaScript for Validation
  form.addEventListener("submit", function(e) {
    if (form.checkValidity() == false) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  }, false); // on submit
  form.addEventListener("reset", function(e) {
    form.reset();
    var alertBox = "<div class='alert " + "alert-danger" + " alert-dismissable fade show'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + "test" + "</div>";
    form.querySelector('.contact_response').innerHTML = alertBox;
    form.classList.remove("was-validated");
  }, false); // on reset


  // when the form is submitted
  form.addEventListener("submit", function(e) {

    // if the validator does not prevent form submit
    if (!e.defaultPrevented) {
      var url = "contact/contact.php";

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) { // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;

          // let's compose Bootstrap alert box HTML
          var alertBox = "<div class='alert " + messageAlert + " alert-dismissable fade show'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + messageText + "</div>";

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            form.querySelector('.contact_response').innerHTML = alertBox;
            // empty the form if message was sent
            if (data.type == "success") {
              form.reset();
            }
          }
        }
      }); // ajax
      return false;
    }
  })
});
