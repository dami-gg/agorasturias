<?php

class passwordHash {


  // this will be used to generate a hash
  public static function hash($password) {
    return password_hash($password, PASSWORD_BCRYPT);
  }

  // this will be used to compare a password against a hash
  public static function check_password($hash, $password) {

    return password_verify($password, $hash);
  }

}

?>
