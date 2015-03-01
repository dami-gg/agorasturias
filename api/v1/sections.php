<?php
/*
  Returns a list with all sections defined in the database
*/
  $app->get('/sections',
  function() use ($app){

    $response = array();
    $db = new DbHandler();

    //$sections = $db->getSections();
    $sections = $db->prepared_query("select * from secciones where 1=?","i",array("1"));

    if (!$db->_error()) {
      $response['status'] = "success";
      $response['sections'] = $sections;
      echoResponse(200,$response);
    }
    else{
      $response['status'] = "error";
      $response['message'] = $db->getLastError();
      echoResponse(500,$response);
    }

  });

  /* CREATES A NEW SECTION RECORD IN THE DB
  Needs the following fields of the section to create it
  in a json-like structure named 'section':
  section
  |- seccion
  |- engTitle
  |- engText
  |- esTitle
  |- esText
  |- image
  |- header_image
  |- username
  */
  $app->post('/sections',
  function() use ($app){
    $r = json_decode($app->request->getBody(),true);

    $response = array();
    $db = new DbHandler();

    $section = $r["section"];

    $query = "select uid from users where role='admin' and username = '".$section['modifier_username']."'";
    $user = $db->getOneRecord($query);
    $params = array();
    $params_string = '';

    $session = $db->getSession();

    // Only if user is logged in with a valid username
    // and it matches with the user in the session
    if(isset($user) && $section['modifier_username']==$session['username']){
      $query = 'UPDATE secciones set ';

      if(isset($section['engTitle'])){
        $query .= ' engTitle = ? , ';
        array_push($params, $section['engTitle']);
        $params_string .= 's';
      }
      else{
        $response["status"]="Error";
        $response["message"]="Missing fields creating a new section record";
        echoResponse(500,$response);
        return;
      }

      if(isset($section['engText'])){
        $query .= ' engText = ? , ';
        array_push($params, $section['engText']);
        $params_string .= 's';
      }
      else{
        $response["status"]="Error";
        $response["message"]="Missing fields creating a new section record";
        echoResponse(500,$response);
        return;
      }

      if(isset($section['esTitle'])){
        $query .= ' esTitle = ? , ';
        array_push($params, $section['esTitle']);
        $params_string .= 's';
      }
      else{
        $response["status"]="Error";
        $response["message"]="Missing fields creating a new section record";
        echoResponse(500,$response);
        return;
      }

      if(isset($section['esText'])){
        $query .= ' esText = ? , ';
        array_push($params, $section['esText']);
        $params_string .= 's';
      }
      else{
        $response["status"]="Error";
        $response["message"]="Missing fields creating a new section record";
        echoResponse(500,$response);
        return;
      }

      if(isset($section['image'])){
        $query .= ' image = ? , ';
        array_push($params, $section['image']);
        $params_string .= 's';
      }
      else{
        $query .= ' image = ? , ';
        array_push($params, "");
        $params_string .= 's';
      }

      $query .= ' user = ?, user_modified = ?, '.
      ' create_date = NOW(), last_modified = NOW()';

      array_push($params, $section['user']);
      array_push($params, $section['user']);

      $params_string .= 'ii';

      if($db->prepared_query($query, $params_string, $params)){
        $response["status"]="success";
        $response['message']="Modificación realizada con éxito";
        echoResponse(200,$response);
      }
      else{
        $response["status"]="Error";
        $response["message"]=$db->getLastError();
        echoResponse(500,$response);
      }
    }
    else{
      $response['status'] = "Error";
      $response['message'] = "Authentication error or user not found, could not update the section";
      echoResponse(401,$response);
    }

  });

  /* UPDATES A SECTION RECORD IN THE DB
    Needs the ID of the section passed in the URL,
    the user who modifies it, inside the section JSON, as modifier_username
    and the fields to be modified (and only the ones to be modified)
    given in a json-like structure named 'section', one or several
    of the next fields:
    section
    |- seccion
    |- engTitle
    |- engText
    |- esTitle
    |- esText
    |- last_modified
    |- user_modified
    |- image
    |- header_image
  */
  $app->put('/sections/:id',
  function($id) use ($app){
    $r = json_decode($app->request->getBody(),true);

    $response = array();
    $db = new DbHandler();

    $section = $r["section"];

    $query = "select uid from users where role='admin' and username = '".$section['modifier_username']."'";
    $user = $db->getOneRecord($query);
    $params = array();
    $params_string = '';

    $session = $db->getSession();

    // Only if user is logged in with a valid username
    // and it matches with the user in the session
    if(isset($user) && $section['modifier_username']==$session['username']){
      $query = 'UPDATE secciones set ';

      if(isset($section['engTitle'])){
        $query .= ' engTitle = ? , ';
        array_push($params, $section['engTitle']);
        $params_string .= 's';
      }

      if(isset($section['engText'])){
        $query .= ' engText = ? , ';
        array_push($params, $section['engText']);
        $params_string .= 's';
      }

      if(isset($section['esTitle'])){
        $query .= ' esTitle = ? , ';
        array_push($params, $section['esTitle']);
        $params_string .= 's';
      }

      if(isset($section['esText'])){
        $query .= ' esText = ? , ';
        array_push($params, $section['esText']);
        $params_string .= 's';
      }

      if(isset($section['image'])){
        $query .= ' image = ? , ';
        array_push($params, $section['image']);
        $params_string .= 's';
      }

      $query .= ' user_modified = ?, '.
      ' last_modified = NOW() where id = ?';

      array_push($params, $section['user_modified']);
      array_push($params, $id);

      $params_string .= 'ii';

      if($db->prepared_query($query,$params_string,$params)){
        $response["status"]="success";
        $response['message']="Modificación realizada con éxito";
        echoResponse(200,$response);
        return;
      }
      else{
        $response["status"]="Error";
        $response["message"]=$db->getLastError();
        echoResponse(500,$response);
        return;
      }
    }
    else{
      $response['status'] = "Error";
      $response['message'] = "Authentication error or user not found, could not update the section";
      echoResponse(401,$response);
      return;
    }

  });

  /*
    returns all the entries in the menus table
  */
  $app->get('/menus',
  function() use ($app){

    $response = array();
    $db = new DbHandler();

    $menus = $db->getMenus();

    if (!$db->_error()) {
      $response['status'] = "success";
      $response['menus'] = $menus;
      echoResponse(200,$response);
    }
    else{
      $response['status'] = "error";
      $response['message'] = $db->getLastError();
      echoResponse(500,$response);
      return;
    }

  });

  /* CREATES A NEW MENU RECORD IN THE DB
  Needs the data of the menu entry to be created inside the menu JSON
  Also needs the username of the user creating it
  inside the same structure
  menu
  |- name
  |- en_text
  |- es_text
  |- username
  */
  $app->post('/menus',
  function($id) use ($app){
    $r = json_decode($app->request->getBody(),true);

    $response = array();
    $db = new DbHandler();

    $menu = $r["menu"];

    $query = "select uid from users where role='admin' and username = '".$menu['username']."'";
    $user = $db->getOneRecord($query);
    $params = array();
    $params_string = '';

    $session = $db->getSession();

    // Only if user is logged in with a valid username
    // and it matches with the user in the session
    if(isset($user) && $section['modifier_username']==$session['username']){
      $query = 'UPDATE menus set ';

      if(isset($menu['en_text'])){
        $query .= ' en_text = ? , ';
        array_push($params, $menu['en_text']);
        $params_string .= 's';
      }

      if(isset($menu['es_text'])){
        $query .= ' es_text = :es_text: , ';
        array_push($params, $menu['es_text']);
        $params_string .= 's';
      }

      $query .= ' 1=1 where id=?';
      array_push($params, $id);
      $params_string .='i';

      if($db->prepared_query($query,$params_string,$params)){
        $response["status"]="success";
        $response['message']="Modificación realizada con éxito";
        echoResponse(200,$response);
        return;
      }
      else{
        $response["status"]="Error";
        $response["message"]=$db->getLastError();
        echoResponse(500,$response);
        return;
      }
    }
    else{
      $response['status'] = "Error";
      $response['message'] = "Authentication error or user not found, could not update the section";
      echoResponse(401,$response);
      return;
    }

  });

  /*
  Needs the ID of the menu entry passed in the URL,
  the user who modifies it, inside the menu JSON, as modifier_username
  and the fields to be modified (and only the ones to be modified)
  given in a json-like structure named 'menu', one or several
  of the next fields:
  menu
  |- name
  |- en_text
  |- es_text
  */
  $app->put('/menus/:id',
  function($id) use ($app){
    $r = json_decode($app->request->getBody(),true);

    $response = array();
    $db = new DbHandler();

    $menu = $r["menu"];

    $query = "select uid from users where role='admin' and username = '".$menu['modifier_username']."'";
    $user = $db->getOneRecord($query);
    $params = array();
    $params_string = '';

    $session = $db->getSession();

    // Only if user is logged in with a valid username
    // and it matches with the user in the session
    if(isset($user) && $menu['modifier_username']==$session['username']){
      $query = 'UPDATE menus set ';

      if(isset($menu['en_text'])){
        $query .= ' en_text = ? , ';
        array_push($params, $menu['en_text']);
        $params_string .= 's';
      }

      if(isset($menu['es_text'])){
        $query .= ' es_text = ? , ';
        array_push($params, $menu['es_text']);
        $params_string .= 's';
      }

      $query .= ' last_modified=NOW() where id=?';
      array_push($params, $id);
      $params_string .='i';

      if($db->prepared_query($query,$params_string,$params)){
        $response["status"]="success";
        $response['message']="Modificación realizada con éxito";
        echoResponse(200,$response);
        return;
      }
      else{
        $response["status"]="Error";
        $response["message"]=$db->getLastError();
        echoResponse(500,$response);
        return;
      }
    }
    else{
      $response['status'] = "Error";
      $response['message'] = "Authentication error or user not found, could not update the section";
      echoResponse(401,$response);
      return;
    }

  });

?>
