<?php

class dbConnect {

  private $conn;

  function __construct() {
  }

  /*
  Connect to DB and return the connection
  */
  function connect() {
    include_once '../config.php';

    $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if (mysqli_connect_errno()) {
      echo "Error connecting to DataBase: " . mysqli_connect_error();
    }

    $this->conn->set_charset("utf8");
    return $this->conn;
  }

}

?>
