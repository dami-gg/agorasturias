<?php

/*
TODO:SECURE THIS!! With PDO?
*/
class DbHandler {

  private $conn;

  function __construct() {
    require_once 'dbConnect.php';
    $db = new dbConnect();
    // Get the connection to the database
    $this->conn = $db->connect();
  }

  public function getLastError(){
    $message = mysqli_errno($this->conn).":".mysqli_error($this->conn);
    return $message;
  }

  public function _error(){
    return mysqli_errno($this->conn) != 0;
  }

  public function getLastID(){
    return mysqli_insert_id($conn);
  }

  /* For queries where we want only the first row */
  public function getOneRecord($query) {
    $r = $this->conn->query($query.' LIMIT 1') or die($this->conn->error.__LINE__);
    return $r->fetch_assoc();
  }

  /* To get all records from one given table */
  public function getAllRecords($table) {

    $results = array();

    $r = $this->conn->query('select * from '.$table) or die ($this->conn->error.__LINE__);

    while($row = $r->fetch_assoc()){
      $results[] = $row;
    }

    return $results;
  }

  /* Returns the number of rows in a given table */
  public function getNumRecords($table){
    $query = "select count(*) as count from ".$table;
    $result = $this->getOneRecord($query);

    return $result["count"];
  }

  /* Returns an associative array with all records requested
  *   Requires:
  *   $order_field -> Field to order
  *   $order ->       Order (ASC or DESC)
  *   $resources ->   Number of items requested
  *   $page ->        Order of page (being first page number 1)
  * TODO: Check that order field is correct, check $resources and $page...
  */
  public function getPostsRange($order_field, $order, $resources, $page){

    if(strcmp(strtoupper($order),"ASC")!=0 && strcmp(strtoupper($order),"DESC")!=0)
      return NULL;

    $results = array();

    $offset = $resources * ($page-1) - 1;
    $offset = ($offset>=0?$offset:0);

    $query = 'select distinct p.id as id, p.create_date as create_date, p.image as image,'.
    ' p.header_image as header_image from posts p'.
    ' order by '.$order_field.' '.$order.
    ' LIMIT '.$offset.','.$resources;

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    while($row = $r->fetch_assoc()){
      $results[] = $row;
    }

    return $results;
  }

  /*
  *   Inserts a new post from the JSON formatted parameter.
  *   Returns the ID of the inserted row or NULL if error.
  */

  public function createPost($json_post){
    $post = json_decode($json_post, true);

    $query = "select uid from users where username = '".$post['username']."'";
    $user = $this->getOneRecord($query);

    $query = "INSERT INTO posts(engTitle, engText,".
    " esTitle, esText, user, user_modified,".
    " image, header_image, create_date, last_modified) VALUES ('".($post['engTitle']).
    "','".($post['engText'])."','".($post['esTitle']).
    "','".($post['esText'])."','".$user['uid']."','".
    $user['uid']."','".$post['image']."','".$post['header_image']."',NOW(),NOW())";

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    if ($r) {
      $new_row_id = $this->conn->insert_id;
      return $new_row_id;
    } else {
      return NULL;
    }

  }

  /*
  *   Updates a post indicated in the JSON formatter parameter.
  *   Requires:
  *   $json_post    ->  JSON version of the information of the post.
  *   Returns true if update was successful or false if not.
  */
  public function updatePost($json_post){
    $post = json_decode($json_post,true);
    $query = "select uid from users where username = '".$post['modifier_username']."'";
    $user = $this->getOneRecord($query);

    $query = 'UPDATE posts set engTitle = "'.($post["engTitle"]).
    '", engText="'.($post["engText"]).'", esTitle = "'.
    ($post["esTitle"]).'", esText="'.($post["esText"]).
    '", last_modified = NOW(), user_modified = '.$user['uid'].
    ', image = "'.$post["image"].'" where id = '.$post["id"];

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    if($r){
      return true;
    } else {
      return false;
    }
  }

  /*
  *   Deletes the post with ID indicated in the parameter
  */
  public function deletePost($id){
    $query = "delete from posts where id = ".$id;

    $r = $this->conn->query($query) or die ($this->conn->error.__LINE__);

    if($r){
      return true;
    } else {
      return false;
    }

  }

  public function getPostById($id){

    $query = "SELECT p.engTitle as engTitle, p.esText as esText,".
    " p.esTitle as esTitle, p.engText as engText, p.image as image".
    " FROM posts p WHERE p.id = ".$id;

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    return $r->fetch_assoc();
  }

  public function insertIntoTable($obj, $column_names, $table_name) {

    $c = (array) $obj;
    $keys = array_keys($c);
    $columns = '';
    $values = '';
    foreach($column_names as $desired_key){ // Check the obj received. If blank insert blank into the array.
      if(!in_array($desired_key, $keys)) {
        $$desired_key = '';
      }else{
        $$desired_key = $c[$desired_key];
      }
      $columns = $columns.$desired_key.',';
      $values = $values."'".$$desired_key."',";
    }
    $query = "INSERT INTO ".$table_name."(".trim($columns,',').") VALUES(".trim($values,',').")";
    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    if ($r) {
      $new_row_id = $this->conn->insert_id;
      return $new_row_id;
    } else {
      return NULL;
    }
  }

  public function setSession($userdata){
    if(isset($userdata)){
      $_SESSION['uid'] = $userdata['uid'];
      $_SESSION['role'] = $userdata['role'];
      $_SESSION['name'] = $userdata['name'];
      $_SESSION['username'] = $userdata['username'];
      $_SESSION['email'] = $userdata['email'];
      $_SESSION['body'] = $userdata['body'];
      $_SESSION['visa'] = $userdata['visa'];
      return true;
    }

    return false;

  }

  public function getSession(){
    if (!isset($_SESSION)) {
      session_start();
    }
    $sess = array();
    if(isset($_SESSION['uid']))
    {
      $sess["uid"] = $_SESSION['uid'];
      $sess["name"] = $_SESSION['name'];
      $sess["email"] = $_SESSION['email'];
      $sess["role"] = $_SESSION['role'];
      $sess["username"] = $_SESSION['username'];
      $sess["body"] = $_SESSION['body'];
      $sess["visa"] = $_SESSION['visa'];
    }
    else
    {
      $sess["uid"] = '';
      $sess["name"] = 'Guest';
      $sess["email"] = '';
      $sess["role"] = '';
      $sess["username"] = '';
      $sess["body"] = '';
      $sess["visa"] = '';
    }
    return $sess;
  }
  public function destroySession(){
    if (!isset($_SESSION)) {
      session_start();
    }
    if(isSet($_SESSION['uid']))
    {
      unset($_SESSION['uid']);
      unset($_SESSION['name']);
      unset($_SESSION['email']);
      unset($_SESSION['username']);
      unset($_SESSION['role']);
      unset($_SESSION['body']);
      unset($_SESSION['visa']);
      $info='info';
      if(isSet($_COOKIE[$info]))
      {
        setcookie ($info, '', time() - $cookie_time);
      }
      $msg="Logged Out Successfully...";
    }
    else
    {
      $msg = "Not logged in...";
    }
    return $msg;
  }

  public function getSections(){
    $results = array();
    $query = "select * from secciones";

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    while($row = $r->fetch_assoc()){
      $results[] = $row;
    }

    return $results;
  }

  public function getMenus(){
    $results = array();
    $query = "select * from menus";

    $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

    while($row = $r->fetch_assoc()){
      $results[] = $row;
    }

    return $results;

  }


  /*
  Functions that given a parametrized query and its parameters
  executes it and returns results in a key=>value like array
  Parameters:
  * Link to the DB connection established
  * SQL query string (i - int, d - double, s - string, b - bool)
  * Array with the types of parameters
  * Array with the parameters
  Operation:
  ----------
  If parameters array has only one dimension it will be treated as one single query
  + Parameters("Param1", "param2", ..., "paramN")
  Result will be an array like
  + Result(
    0=>array(column1=>value1, column2=>value2..., columnN=>valueN)
    1=>array(column1=>value1, column2=>value2..., columnN=>valueN)
    ...
    N=>array(column1=>value1, column2=>value2..., columnN=>valueN)
  )

  If parameters array has more than one dimension it will be treated as a separate
  query per each dimension the array has
  + Parameters(array("Param1", "param2", ..., "paramN"),
    ...,
    array("Param1", "param2", ..., "paramN"))
  Result will be an array of arrays, each one in the same format as above
  + Result(
    0=>array(
      0=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      1=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      ...
      N=>array(column1=>value1, column2=>value2..., columnN=>valueN)
    )
    1=>array(
      0=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      1=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      ...
      N=>array(column1=>value1, column2=>value2..., columnN=>valueN)
    )
    ...
    N=>array(
      0=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      1=>array(column1=>value1, column2=>value2..., columnN=>valueN)
      ...
      N=>array(column1=>value1, column2=>value2..., columnN=>valueN)
    )
  )

  Extracted from: http://php.net/manual/es/mysqli.prepare.php#107200
  */

  function prepared_query($sql,$typeDef = FALSE,$params = FALSE){
    $link = $this->conn;

    if($stmt = mysqli_prepare($link,$sql)){
      if(count($params) == count($params,1)){
        $params = array($params);
        $multiQuery = FALSE;
      } else {
        $multiQuery = TRUE;
      }

      if($typeDef){
        $bindParams = array();
        $bindParamsReferences = array();
        $bindParams = array_pad($bindParams,(count($params,1)-count($params))/count($params),"");
        foreach($bindParams as $key => $value){
          $bindParamsReferences[$key] = &$bindParams[$key];
        }
        array_unshift($bindParamsReferences,$typeDef);
        $bindParamsMethod = new ReflectionMethod('mysqli_stmt', 'bind_param');
        $bindParamsMethod->invokeArgs($stmt,$bindParamsReferences);
      }

      $result = array();
      foreach($params as $queryKey => $query){
        foreach($bindParams as $paramKey => $value){
          $bindParams[$paramKey] = $query[$paramKey];
        }
        $queryResult = array();
        if(mysqli_stmt_execute($stmt)){
          $resultMetaData = mysqli_stmt_result_metadata($stmt);
          if($resultMetaData){
            $stmtRow = array();
            $rowReferences = array();
            while ($field = mysqli_fetch_field($resultMetaData)) {
              $rowReferences[] = &$stmtRow[$field->name];
            }
            mysqli_free_result($resultMetaData);
            $bindResultMethod = new ReflectionMethod('mysqli_stmt', 'bind_result');
            $bindResultMethod->invokeArgs($stmt, $rowReferences);
            while(mysqli_stmt_fetch($stmt)){
              $row = array();
              foreach($stmtRow as $key => $value){
                $row[$key] = $value;
              }
              $queryResult[] = $row;
            }
            mysqli_stmt_free_result($stmt);
          } else {
            $queryResult[] = mysqli_stmt_affected_rows($stmt);
          }
        } else {
          $queryResult[] = FALSE;
        }
        $result[$queryKey] = $queryResult;
      }
      mysqli_stmt_close($stmt);
    } else {
      $result = FALSE;

      return $result;
    }

    if($multiQuery){
      return $result;
    } else {
      return $result[0];
    }
  }
}

?>
