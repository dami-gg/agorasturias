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
  echoResponse(200, json_encode($session));
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
  $session = $db->destroySession();
  $response["status"] = "info";
  $response["message"] = "Logged out successfully";
  echoResponse(200, $response);
});
?>
