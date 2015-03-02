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
  $user = $db->getOneRecord("select uid,username,name,password,email,app_id,role from users where username='$username'");
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

?>
