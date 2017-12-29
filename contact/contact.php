<?php
/*
THIS FILE USES PHPMAILER INSTEAD OF THE PHP MAIL() FUNCTION
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

/*
*  CONFIGURE EVERYTHING HERE
*/

// an email address that will be in the From field of the email.
$fromEmail = 'contact@moritz-brunnengraeber.de';
$fromName = 'Contact form';

// an email address that will receive the email with the output of the form
$sendToEmail = 'mail@moritz-brunnengraeber.de';
$sendToName = 'Moritz Brunnengräber';

// subject of the email
$subject = 'New message';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'email' => 'E-mail', 'message' => 'Message');

// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

/*
*  LET'S DO THE SENDING
*/

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try
{
  if(count($_POST) == 0) throw new \Exception("Form is empty");


  $emailTextHtml = "<h2>New message</h2>";
  $emailTextHtml .= "<p>Here is a new message from the contact form on https://www.moritz-brunnengraeber.de/</p><hr>";

    foreach ($_POST as $key => $value) {
      // If the field exists in the $fields array, include it in the email
      if (isset($fields[$key])) {
        $value = nl2br($value);
        $emailTextHtml .= "<h3>$fields[$key]</h3><p>$value</p>";
      }
    }
    $emailTextHtml .= "<hr><p>Cheers</p>";

    $mail = new PHPMailer;

    $mail->CharSet = "UTF-8";

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();
    $mail->addReplyTo($_POST['email']);

    $mail->isHTML(true);

    $mail->Subject = $subject;
    $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy


    if(!$mail->send()) {
      throw new \Exception("I could not send the email. " . $mail->ErrorInfo);
    }

    $responseArray = array('type' => 'success', 'message' => $okMessage);
  }
  catch (\Exception $e)
  {
    // $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
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
