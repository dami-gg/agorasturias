<?php
/*
 Returns the full list of products in a JSON with the following fields:
 */

$app->get('/products',
  function() use($app){
    $response = array();
    $db = new DbHandler();
    $session = $db->getSession();

    if($session["username"]!="GUEST"){
      $participation_fee = $db->prepared_query("select * from products where name=?","s",array("PARTICIPATION FEE"));
      // The participation fee is always the first item
      // so it is the first one displayed in the shop
      // price varies depending on user, if it is visa_participant or not
      if($session["visa"]!=0){
        // if it's visa participants
        $participation_fee["0"]["price"] = 50;
      }
      $response["products"][0] = $participation_fee["0"];

      $products = $db->prepared_query("select * from products where name<>?","s",array("PARTICIPATION FEE"));
      foreach($products as $order => $product){
        $response["products"][$order + 1] = $product;
      }

      $response["status"] = "success";

      echoResponse(200, $response);
    }
    else{
      $response["status"] = "error";
      $response["messge"] = "Not authorized";
      echoResponse(500, $response);
    }

  });

/*
Posts a new order from a user
Requires:
  * username
  * list of products and number of each one
  in a JSON structure like:
  [
    username:user,
    products[
      {productN details as given in call to get(/products)}
    ]
  ]
Returns:
  * detail of the order (with a generated orderID) if success
  * error and an error message if any
*/
$app->post('/orders',
function() use($app){
  $r = json_decode($app->request->getBody());

  $orderID = 0;
  $total_price = 0;
  $response = array();
  $db = new DbHandler();
  $session = $db->getSession();

  $user = $r->username;
  foreach($r->products as $item){
    $total_price += $item->price * $item->number;
  }

  if($session["username"] == $user){
    // First of all we create the new order
    $sql = "insert into shop_orders (date,id_participant,total_price,status) values(NOW(),?,?,'IN_PROGRESS')";
    $db->prepared_query($sql,"id",array($session["id"],$total_price));
    if($db->_error()){
      // TODO return error message
      return;
    }

    // Then read the last order_id
    $orderID = $db->getLastID();

    // For each prodict in the order we have to insert the record for it
    $parameters = array();
    foreach($r->prodcuts as $product){
      $parameters.push(array($product->id,$product->number,$orderID));
    }

    $sql = "insert into product_orders(id_product, number, shop_order_id) values(?,?,?)";
    $db->prepared_query($sql,"iii",$parameters);

    $response["status"] = "success";
    $response["orderID"] = $orderID;
    echoResponse(200,$response);
    return;
  }
  else{
    $response["message"] = "You are not authorized to continue with this operation";
    $response["status"] = "error";
    echoResponse(500,$response);
    return;
  }


});
