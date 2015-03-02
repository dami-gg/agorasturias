<?php

  require_once '.././libs/Slim/Slim.php';

  $app->post('/mail', function () use($app){
    $r = json_decode($app->request->getBody(), true);
    $response = array();

    $mail_to_send_to = "incoming-l@agorasturias.org";
    $feedbackmail = "noreply@agorasturias.org";

    $email = $r['email'];
    $message = $r['message'];
    $name = $r['name'];
    $headers = "From: $feedbackmail" . "\r\n" . "Reply-To: $email, incoming@agorasturias.org" . "\r\n" ;
    $a = mail( $mail_to_send_to, "Contact from web form - $name", $message, $headers );
    if ($a)
    {
      $response['status'] = "success";
      $response['message'] = "Email sent successfully";
      echoResponse(200,$response);
    } else {
      $response['status'] = "error";
      $response['message'] = "An error occured while sending the email";
      echoResponse(500,$response);
    }
    
    return;

  });

?>
