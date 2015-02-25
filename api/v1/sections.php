<?php

  $app->get('/sections',
  function() use ($app){

    $response = array();
    $db = new DbHandler();

    $sections = $db->getSections();

    if (!$db->_error()) {
      $response['status'] = "success";
      $response['sections'] = $sections;
    }
    else{
      $response['status'] = "error";
      $response['message'] = $db->getLastError();
    }

    echoResponse(200,$response);

  });

  $app->get('/menus',
  function() use ($app){

    $response = array();
    $db = new DbHandler();

    $menus = $db->getMenus();

    if (!$db->_error()) {
      $response['status'] = "success";
      $response['sections'] = $menus;
    }
    else{
      $response['status'] = "error";
      $response['message'] = $db->getLastError();
    }

    echoResponse(200,$response);

  });

?>
