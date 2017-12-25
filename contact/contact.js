$(function () {
  "use strict";

  // Autoresize textares
  autosize($('textarea'));

  var form = $('#contact_form')[0];

  // Custom JavaScript for Validation
  window.addEventListener("load", function() {
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false); // on submit
    form.addEventListener("reset", function(event) {
      form.classList.remove("was-validated");
    }, false); // on reset
  }, false);


    // when the form is submitted

    $(form).on("submit", function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "/contact/contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = "alert-" + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = "<div class='alert " + messageAlert + " alert-dismissable fade show'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + messageText + "</div>";

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $(form).find(".messages").html(alertBox);
                        // empty the form
                        $(form).reset();
                    }
                }
            });
            return false;
        }
    })
});
