<?php
/*
TODO:SECURE THIS!!!
*/

$app->get('/translate', function() use ($app) {

  $r = json_decode($app->request->getBody());

  $response = array();
  $db = new DbHandler();

  $posts = $db->getAllRecords('posts');

  if (!$db->_error()) {
    $response['status'] = "success";
    foreach($posts as $order => $post){
      $response['es']['POST_'.$post['id'].'_TITLE'] = base64_decode($post['esTitle']);
      $response['es']['POST_'.$post['id'].'_BODY'] = base64_decode($post['esText']);
      $response['en']['POST_'.$post['id'].'_TITLE'] = base64_decode($post['engTitle']);
      $response['en']['POST_'.$post['id'].'_BODY'] = base64_decode($post['engText']);
    }
    unset($post);
  }
  else {
    $response['status'] = "error";
    $response['message'] = $db->getLastError();
    echoResponse(200,$response);
    return;
  }

  $sections = $db->getAllRecords('secciones');

  if(!$db->_error()){
    foreach($sections as $order => $section){
      $response['es'][$section['seccion']] = $section['esTitle'];
      $response['es'][$section['seccion']] = $section['esText'];
      $response['en'][$section['seccion']] = $section['engTitle'];
      $response['en'][$section['seccion']] = $section['engText'];
    }
    unset($section);
  }
  else {
    $response['status'] = "error";
    $response['message'] = $db->getLastError();
    echoResponse(200,$response);
    return;
  }

  $menus = $db->getAllRecords('menus');

  if(!$db->_error()){
    foreach($menus as $order => $menu){
      $response['es'][$menu['name']] = $menu['es_text'];
      $response['en'][$menu['name']] = $menu['en_text'];
    }
    unset($menu);
  }
  else {
    $response['status'] = "error";
    $response['message'] = $db->getLastError();
    echoResponse(200,$response);
    return;
  }

  if($_GET['lang']=='es')
    echoResponse(200,$response['es']);
  else
    echoResponse(200,$response['en']);

  return;

});

$app->get('/posts/:lang/:order/:page/:resources',
function($lang,$order,$page,$resources) use ($app) {

  $r = json_decode($app->request->getBody());

  $response = array();
  $db = new DbHandler();

  $posts = $db->getPostsRange('create_date',$order,$resources,$page);

  if (!$db->_error()) {
    $response['status'] = "success";

    foreach($posts as $order => $post){

      $posts[$order]['title'] = 'POST_'.$post['id'].'_TITLE';
      $posts[$order]['text'] = 'POST_'.$post['id'].'_BODY';
    }
    unset($post);

    $response['posts'] = $posts;
    $response['total_posts'] = $db->getNumRecords("posts");
  }
  else {
    $response['status'] = "error";
    $response['message'] = $db->getLastError();
  }

  echoResponse(200,$response);

  return;
});

$app->post('/posts', function() use ($app){
  $r = json_decode($app->request->getBody());

  $response = array();
  $db = new DbHandler();

  $post = json_decode($r->post,true);

  // easy fast way to lead with all the html-styles in texts and titles
  $post['engTitle'] = base64_encode($post['engTitle']);
  $post['engText'] = base64_encode($post['engText']);
  $post['esTitle'] = base64_encode($post['esTitle']);
  $post['esText'] = base64_encode($post['esText']);

  $new_post_id = $db->createPost(json_encode($post),true);

  if(!is_null($new_post_id)){
    $query = 'select p.id, p.engTitle as engTitle,'.
    ' p.esText as esText, p.esTitle as esTitle,'.
    ' p.engText as engText, p.create_date as create_date, p.last_modified as last_modified,'.
    ' u.username as username, u.uid as user_id, u2.username as modifier_username,'.
    ' u2.uid as modifier_id, p.image as image, p.header_image as header_image'.
    ' from posts p'.
    ' inner join users u on u.uid = p.user'.
    ' inner join users u2 on u2.uid = p.user_modified'.
    ' where p.id = '.$new_post_id;

    $new_post = $db->getOneRecord($query);

    if(!$db->_error()){
      $new_post['engTitle'] = base64_decode($new_post['engTitle']);
      $new_post['engText'] = base64_decode($new_post['engText']);
      $new_post['esTitle'] = base64_decode($new_post['esTitle']);
      $new_post['esText'] = base64_decode($new_post['esText']);

      $response['status']="success";
      //$response['post']=$new_post;
      $response['message']="Inserción realizada con éxito";
    }
    else {
      $response['status']="Error";
      $response['message']=$db->getLastError();
    }
  }
  else{
    $response['status']="Error";
    $response['message']=$db->getLastError();
  }

  echoResponse(200,$response);

  return;
});

$app->put('/posts/:id', function($id) use ($app){
  $r = json_decode($app->request->getBody());

  $response = array();
  $db = new DbHandler();

  $post = json_decode($r->post,true);

  // easy fast way to lead with all the html-styles in texts and titles
  $post['engTitle'] = base64_encode($post['engTitle']);
  $post['engText'] = base64_encode($post['engText']);
  $post['esTitle'] = base64_encode($post['esTitle']);
  $post['esText'] = base64_encode($post['esText']);

  if($db->updatePost(json_encode($post))){
    $response["status"]="success";
    $response['message']="Modificación realizada con éxito";
  }
  else{
    $response["status"]="Error";
    $response["message"]=$db->getLastError();
  }

  echoResponse(200,$response);

});

$app->delete('/posts/:id', function($id) use ($app){

  $response = array();
  $db = new DbHandler();

  if($db->deletePost($id)){
    $response["status"]="success";
    $response['message']="Borrado realizado con éxito";

  }
  else{
    $response["status"]="Error";
    $response["message"]=$db->getLastError();
  }

  echoResponse(200,$response);

});

$app->get('/posts/:id',
function($id) use ($app) {

  $r = json_decode($app->request->getBody());

  $response = array();
  $db = new DbHandler();

  $post = $db->getPostById($id);

  if (!$db->_error()) {
    $response['status'] = "success";

    $response['title'] = 'POST_'.$id.'_TITLE';
    $response['text'] = 'POST_'.$id.'_BODY';
    $response['image'] = $post['image'];
    $response['esTitle'] = base64_decode($post['esTitle']);
    $response['esText'] = base64_decode($post['esText']);
    $response['engTitle'] = base64_decode($post['engTitle']);
    $response['engText'] = base64_decode($post['engText']);

  }
  else {
    $response['status'] = "error";
    $response['message'] = $db->getLastError();
  }

  echoResponse(200,$response);

  return;
});

?>
