<?php
/*
TODO:Make authentication secure
*/
$app->get('/session', function() {
  $db = new DbHandler();
  $session = $db->getSession();
  $response["uid"] = $session['uid'];
  $response["email"] = $session['email'];
  $response["name"] = $session['name'];
  $response["role"] = $session['role'];
  $response["username"] = $session['username'];
  $response["body"] = $session['body'];
  $response["visa"] = $session['visa'];
  echoResponse(200, $response);
});

$app->post('/login', function() use ($app) {
  require_once 'passwordHash.php';
  $r = json_decode($app->request->getBody());

  verifyRequiredParams(array('username', 'password'),$r);
  $response = array();
  $db = new DbHandler();
  // $password = $r->user->password;
  // $username = $r->user->username;
  $password = $r->password;
  $username = $r->username;
  $user = $db->getOneRecord("select uid,username,name,password,email,app_id,role,body,visa from users where username='$username'");
  if ($user != NULL) {
    if(passwordHash::check_password($user['password'],$password)){
      $response['status'] = "success";
      $response['message'] = 'Logged in successfully.';
      $response['name'] = $user['name'];
      $response['uid'] = $user['uid'];
      $response['email'] = $user['email'];
      $response['app_id'] = $user['app_id'];
      $response['username'] = $user['username'];
      $response['role'] = $user['role'];
      $response['body'] = $user['body'];
      $response['visa'] = $user['visa'];
      if (!isset($_SESSION)) {
        session_start();
      }

      $db->setSession($user);
    }
    else {
      $response['status'] = "error";
      $response['message'] = 'Login failed. Incorrect credentials';
    }
  }
  else {
    $response['status'] = "error";
    $response['message'] = 'No such user is registered';
  }
  echoResponse(200, $response);
});

$app->get('/logout', function() {
  $db = new DbHandler();
  $response = array();
  $session = $db->destroySession();
  $response["status"] = "info";
  $response["message"] = "Logged out successfully";
  echoResponse(200, $response);
});

/*
Method to change the password of a given user
Needs:
+ username: Username of the user changing password
+ curr_pass: Current password
+ new_pass: New password
*/
$app->put('/changepwd',function() use($app){
  $db = new DbHandler();
  require_once 'passwordHash.php';

  $session = $db->getSession();
  $r = json_decode($app->request->getBody());
  $response = array();

  $username = $r->username;
  $password = $r->curr_pass;
  $new_password = $r->new_pass;

  $user = $db->getOneRecord("select uid,username,password from users where username='$username'");

  /* if the user changing the password exists
  if password matches and the user is the same as the one in the session */
  if (isset($user)) {
    if(passwordHash::check_password($user['password'],$password)
    && $username == $session['username']){

      $new_password_hash = passwordHash::hash($new_password);

      if($db->prepared_query("UPDATE users set password = ? where username = ?",
      "ss", array($new_password_hash, $username)))
      {
        $response["status"] = "success";
        $response["message"] = "Password changed successfully";
        echoResponse (200, $response);
      }
      else{
        $response["status"] = "error";
        $response["message"] = "Error in DB updating the password";
        echoResponse (500, $response);
      }

    }
    else {
      $response["status"] = "error";
      $response["message"] = "Not authorized to do this operation";
      echoResponse (401, $response);
    }

  }
  else {
    $response["status"] = "error";
    $response["message"] = "Requesting user does not exist";
    echoResponse (403, $response);
  }
});

/*
  Generates and returns the hash for a given string
  Requires:
  + password: string with the password to be hashed
  Returns:
  + String with the hash of the string provided
*/
$app->post('/pass', function() use($app) {
  require_once 'passwordHash.php';

  $r = json_decode($app->request->getBody());

  echo passwordHash::hash($r->password);
});

// usage: $newpassword = generatePassword(12); // for a 12-char password, upper/lower/numbers.
// functions that use rand() or mt_rand() are not secure according to the PHP manual.

function getRandomBytes($nbBytes = 32)
{
  $bytes = openssl_random_pseudo_bytes($nbBytes, $strong);
  if (false !== $bytes && true === $strong) {
    return $bytes;
  }
  else {
    throw new \Exception("Unable to generate secure token from OpenSSL.");
  }
}

function generatePassword($length){
  return substr(preg_replace("/[^a-zA-Z0-9]/", "", base64_encode(getRandomBytes($length+1))),0,$length);
}

$app->post('/auto_pass', function() use($app){
  require_once 'passwordHash.php';

  $db = new DbHandler();

  $session = $db->getSession();
  if($session["username"]=="admin"){
    $r = $db->prepared_query("select uid, username, name, email from users where password=? LIMIT 100","s",array(""));
    foreach($r as $user){
      $pass = generatePassword(12);
      $pass_hash = password_hash($pass, PASSWORD_DEFAULT);
      $db->prepared_query("update users set password = ? where uid = ?", "si", array($pass_hash,$user["uid"]));

      $mail_to_send_to = $user['email'].",info@agorasturias.org";
      $feedbackmail = "info@agorasturias.org";

      $name = $user['name'];
      $username = $user['username'];

      $email = $user["email"];
      $message = "Dear $name\n\n";
      $message .= "This email is for informing you that an account has been created for you\n";
      $message .= "in our system so you can proceed to pay the participation fee and therefore\n";
      $message .= "confirm your participation in the upcoming Spring agorAsturias 2015 in Gijón.\n\n";
      $message .= "Below you can find the information of your account with an autogenerated password.\n";
      $message .= "You can change it from your profile in our site, if you happen to lose it or forget it\n";
      $message .= "please contact us in info@agorasturias.org so we can generate a new one for you.\n\n";
      $message .= " - Login: $username\n";
      $message .= " - Password: $pass\n\n\n";
      $message .= "To log in to the system just click on the menu 'login' and enter the above credentials\n";
      $message .= "Once you have logged in you can go to the shop and select to pay the participation fee\n";
      $message .= "and proceed to the payment via PayPal or using a bank transfer.\n";
      $message .= "There is also an small shop with some useful products like air mattresses, sleepping bags\n";
      $message .= "pumps... and of course the official agorAsturias t-shirt, that you can order online so it\n";
      $message .= "will be waiting for you when you arrive to Asturias\n\n";
      $message .= "Best regards and remember to contact us if you have any problem or doubts\n";
      $message .= "agorAsturias organising team.";

      $headers = "From: $feedbackmail" . "\r\n" . "Reply-To: $email, incoming@agorasturias.org" . "\r\n" ;
      $a = mail( $mail_to_send_to, "Wlecome to agorAsturias web - $name", $message, $headers );
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
    }
  }


});

$app->post('/auto_pass/:userEmail', function($userEmail) use($app){
  require_once 'passwordHash.php';

  $db = new DbHandler();

  $session = $db->getSession();
  if($session["username"]=="admin"){
    $r = $db->prepared_query("select uid, username, name, email from users where email=?","s",array($userEmail));
    foreach($r as $user){
      $pass = generatePassword(12);
      $pass_hash = password_hash($pass, PASSWORD_DEFAULT);
      $db->prepared_query("update users set password = ? where uid = ?", "si", array($pass_hash,$user["uid"]));

      $mail_to_send_to = $user['email'].",info@agorasturias.org";
      $feedbackmail = "info@agorasturias.org";

      $name = $user['name'];
      $username = $user['username'];

      $email = $user["email"];
      $message = "Dear $name\n\n";
      $message .= "This email is for informing you that an account has been created for you\n";
      $message .= "in our system so you can proceed to pay the participation fee and therefore\n";
      $message .= "confirm your participation in the upcoming Spring agorAsturias 2015 in Gijón.\n\n";
      $message .= "Below you can find the information of your account with an autogenerated password.\n";
      $message .= "You can change it from your profile in our site, if you happen to lose it or forget it\n";
      $message .= "please contact us in info@agorasturias.org so we can generate a new one for you.\n\n";
      $message .= " - Login: $username\n";
      $message .= " - Password: $pass\n\n\n";
      $message .= "To log in to the system just click on the menu 'login' and enter the above credentials\n";
      $message .= "Once you have logged in you can go to the shop and select to pay the participation fee\n";
      $message .= "and proceed to the payment via PayPal or using a bank transfer.\n";
      $message .= "There is also an small shop with some useful products like air mattresses, sleepping bags\n";
      $message .= "pumps... and of course the official agorAsturias t-shirt, that you can order online so it\n";
      $message .= "will be waiting for you when you arrive to Asturias\n\n";
      $message .= "Best regards and remember to contact us if you have any problem or doubts\n";
      $message .= "agorAsturias organising team.";

      $headers = "From: $feedbackmail" . "\r\n" . "Reply-To: $email, incoming@agorasturias.org" . "\r\n" ;
      $a = mail( $mail_to_send_to, "agorAsturias password reset - $name", $message, $headers );
      if ($a)
      {
        $response['status'] = "success";
        $response['message'] = "Email sent successfully";
        echoResponse(200,$response);
      } else {
        $response['status'] = "error";
        $response['message'] = "An error occured while sending the email";
        echoResponse(200,$response);
      }
    }
  }


});


?>
