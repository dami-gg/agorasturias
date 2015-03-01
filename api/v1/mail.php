<?php

  require_once '.././libs/Slim/Slim.php';

  $app->post('/mail', function () use($app){
    $r = json_decode($app->request->getBody(), true);
    $response = array();

    $mail_to_send_to = "incoming@agorasturias.org";
    $your_feedbackmail = "noreply@agorasturias.org";

    $email = $r['email'] ;
    $message = $r['message'] ;
    $headers = "From: $your_feedbackmail" . "\r\n" . "Reply-To: $email, incoming@agorasturias.org" . "\r\n" ;
    $a = mail( $mail_to_send_to, "Feedback Form Results", $message, $headers );
    if ($a)
    {
      $response['status'] = "success";
      $response['message'] = "Email sent successfully";
    } else {
      $response['status'] = "error";
      $response['message'] = "An error occured while sending the email";
    }

    echoResponse(200,$response);
    return;

  });

?>
