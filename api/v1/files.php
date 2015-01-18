<?php
/*
TODO:Make authentication secure
*/
$app->get('/images/gallery', function() {

  $rel = 'http://localhost/agorasturias/public/img';
  //$dir = 'C:\\wamp\\www\\agorasturias\\public\img\\';
  $dir = '..'.DS.'..'.DS.'public'.DS.'img'.DS;


  $iterator = glob( $dir . '*.png');
  $files = [];
  $count = 0;
  foreach($iterator as $file) {
    $files[$count]['thumb'] = $rel . '/' . basename($file);
    $files[$count]['image'] = $rel . '/' . basename($file);
    $files[$count]['title'] = basename($file);
    $count ++;
  }

  $iterator = glob( $dir . '*.jpg');
  foreach($iterator as $file) {
    $files[$count]['thumb'] = $rel . '/' . basename($file);
    $files[$count]['image'] = $rel . '/' . basename($file);
    $files[$count]['title'] = basename($file);
    $count ++;
  }

  $iterator = glob( $dir . '*.gif');
  foreach($iterator as $file) {
    $files[$count]['thumb'] = $rel . '/' . basename($file);
    $files[$count]['image'] = $rel . '/' . basename($file);
    $files[$count]['title'] = basename($file);
    $count ++;
  }

  $response['status'] = "Success";
  $response['files'] = $files;
  $response['total_files'] = $count;

  echoResponse(200, $response);
});

$app->post('/upload', function(){
  $rel_img = '/agorasturias/public/img';
  $rel_files  = '/agorasturias/public/files';
  //$dir = 'C:\\wamp\\www\\agorasturias\\public\img\\';
  $dir_img = '..'.DS.'..'.DS.'public'.DS.'img'.DS;
  $dir_file = '..'.DS.'..'.DS.'public'.DS.'file'.DS;

  $response = [];
  $file = '';

  $_FILES['file']['type'] = strtolower($_FILES['file']['type']);

  if ($_FILES['file']['type'] == 'application/pdf'
    || $_FILES['file']['type'] == 'image/jpg'
    || $_FILES['file']['type'] == 'image/jpeg'
    || $_FILES['file']['type'] == 'image/gif'
    || $_FILES['file']['type'] == 'image/png')
  {
    $tmp = $_FILES['file']['tmp_name'];
    $dest = $dir_img . $_FILES['file']['name'];
    copy($tmp, $dest);

    $file = $rel_img.$_FILES['file']['name'];

    $response['status'] = "Success";
  }
  else {
    $tmp = $_FILES['file']['tmp_name'];
    $dest = $dir_file . $_FILES['file']['name'];
    copy($tmp, $dest);

    $file = $rel_file.$_FILES['file']['name'];

    $response['status'] = "Success";
  }


  $response['file'] = $file;
  echoResponse(200, $response);
});
?>
