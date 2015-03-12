<?php

require_once 'dbHandler.php';
require_once 'passwordHash.php';
require '.././libs/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

// User id from db - Global Variable
$user_id = NULL;

include_once '../config.php';
require_once 'authentication.php';
require_once 'files.php';
require_once 'mail.php';
require_once 'posts.php';
require_once 'sections.php';
require_once 'shop.php';
require_once 'paypal.php';

/**
* Verifying required params posted or not
*/
function verifyRequiredParams($required_fields,$request_params) {
  $error = false;
  $error_fields = "";
  foreach ($required_fields as $field) {
    if (!isset($request_params->$field) || strlen(trim($request_params->$field)) <= 0) {
      $error = true;
      $error_fields .= $field . ', ';
    }
  }
  if ($error) {
    // Required field(s) are missing or empty
    // echo error json and stop the app
    $response = array();
    $app = \Slim\Slim::getInstance();
    $response["input"] = $request_params;
    $response["status"] = "error";
    $response["message"] = 'Required field(s) ' . substr($error_fields, 0, -2) . ' is missing or empty';
    echoResponse(200, $response);
    $app->stop();
  }
}


function echoResponse($status_code, $response) {
  $app = \Slim\Slim::getInstance();
  // Http response code
  $app->response->status($status_code);

  // setting response content type to json
  $app->response->headers->set('contentType','application/json');

  $json = json_encode($response);

  echo $json;
}

$app->run();
?>
