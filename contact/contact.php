<?php
/*
THIS FILE USES PHPMAILER INSTEAD OF THE PHP MAIL() FUNCTION
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

/*
*  CONFIGURE EVERYTHING HERE
*/

// an email address that will be in the From field of the email.
$fromEmail = 'mail@moritz-brunnengraeber.de';
$fromName = 'Contact form';

// an email address that will receive the email with the output of the form
$sendToEmail = 'mail@moritz-brunnengraeber.de';
$sendToName = 'Moritz Brunnengräber';

// subject of the email
$subject = 'New message from ';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'email' => 'E-mail', 'message' => 'Message');

// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form.';

/*
*  ReCaptcha
*/

if(isset($_POST["g-recaptcha-response"]) && !empty($_POST["g-recaptcha-response"])) {
	$secret = "6LceuoQUAAAAAEPXbl4PTKlMfEYSyoQDpRWcAGXv";
	$grResponse = $_POST["g-recaptcha-response"];
	// Verify with Google Servers
	$verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$grResponse);
	$responseData = json_decode($verifyResponse);
	if($responseData->success) {



    /*
    *  LET'S DO THE SENDING
    */

    // if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
    error_reporting(E_ALL & ~E_NOTICE);

    try
    {
      if(count($_POST) == 0) throw new \Exception("Form is empty");

      // This is just for testing
      if($_POST["name"] == "ErrorTest" && $_POST["email"] == "Error@Test") throw new \Exception("This is an Error Test");

      $emailTextHtml = "<p>There is a new message from the contact form on https://www.moritz-brunnengraeber.de/</p><hr>";

        foreach ($_POST as $key => $value) {
          // If the field exists in the $fields array, include it in the email
          if (isset($fields[$key])) {
            $value_ = nl2br($value);
            $emailTextHtml .= "<h3>$fields[$key]</h3><p>$value_</p>";
          }
        }
        $emailTextHtml .= "<hr><p>Cheers</p>";

        $mail = new PHPMailer;

        $mail->CharSet = "UTF-8";

        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();
        $mail->addReplyTo($_POST["email"]);

        $mail->isHTML(true);

        $mail->Subject = $subject . $_POST["name"];
        $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy


        if(!$mail->send()) {
          throw new \Exception($mail->ErrorInfo);
        }

        $responseArray = array('type' => 'success', 'message' => $okMessage);
      }
      catch (\Exception $e)
      {
        // $responseArray = array('type' => 'danger', 'message' => $errorMessage);
        $responseArray = array('type' => 'danger', 'message' => $errorMessage . "<br/>" . $e->getMessage());
      }

      // if requested by AJAX request return JSON response
      // if (
      //   (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') ||
      //   (!empty($_SERVER['X_REQUESTED_WITH']) && strtolower($_SERVER['X_REQUESTED_WITH']) == 'xmlhttprequest')
      // ) {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;

        exit;
      // }
      // else just display the message
      // else {
      //   echo $responseArray['message'];
      // }



  } else { // verification failed with error
    $responseArray = array('type' => 'danger', 'message' => $errorMessage . "<br/>reCAPTCHA Error");
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
    exit;
  }
} else { // no verification at all
  $responseArray = array('type' => 'danger', 'message' => $errorMessage . "<br/>Please fill out the Captcha🙏");
  $encoded = json_encode($responseArray);
  header('Content-Type: application/json');
  echo $encoded;
  exit;
}
