// Contact Form

$( document ).ready(function() {

  // Autoresize Textarea
  autosize($("textarea"));

  // Contact Form
  var form = $("#contact_form");

  // submit
  form.on("submit", function(e) {

    if (form[0].checkValidity() == false) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.addClass("was-validated");
    if (!e.isDefaultPrevented()) {
      e.preventDefault;
      phpCommunication(form);
    }
  }); // on submit

  //reset
  form.on("reset", function(event) {
    form.removeClass("was-validated");
    form[0].reset();
  }); // on reset

}); // document ready


// PHP communication
function phpCommunication(form) {

  var url = "contact/contact.php";

  $.ajax({
    type: "POST",
    url: url,
    data: $(form).serialize(),
    dataType: "json",
    success: function (data) { // data = JSON object that contact.php returns

      var messageAlert = "alert-" + data.type;
      var messageText = data.message;

      // Bootstrap alert box HTML
      var alertBox = "<div class='alert " + messageAlert + " alert-dismissable fade show'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + messageText + "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // display the alert box
        form.find(".contact_response").html(alertBox);
        // empty the form if message was sent
        if (data.type == "success") {
          form.reset();
        }
      }
    }// succes
  });// ajax

  return false;
} // php communication
