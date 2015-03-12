<?php

$app->get('/images/ipn_notify/:paymentID',
function($paymentID) use($app) {
  require_once('paypal.class.php');  // include the class file
  $p = new paypal_class;             // initiate an instance of the class
  $p->paypal_url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';   // testing paypal url

  // if there is not action variable, set the default action of 'process'
  if (empty($_GET['action'])) $_GET['action'] = 'process';

  switch ($_GET['action']) {

    case 'cancel':       // Order was canceled...

      // The order was canceled before being completed.

      echo "<html><head><title>Canceled</title></head><body><h3>The order was canceled.</h3>";
      echo "</body></html>";

      break;

    case 'ipn':          // Paypal is calling page for IPN validation...

      // It's important to remember that paypal calling this script.  There
      // is no output here.  This is where you validate the IPN data and if it's
      // valid, update your database to signify that the user has payed.  If
      // you try and use an echo or printf function here it's not going to do you
      // a bit of good.  This is on the "backend".  That is why, by default, the
      // class logs all IPN data to a text file.

      if ($p->validate_ipn()) {

        // Payment has been recieved and IPN is verified.  This is where you
        // update your database to activate or process the order, or setup
        // the database with the user's order details, email an administrator,
        // etc.  You can access a slew of information via the ipn_data() array.

        // Check the paypal documentation for specifics on what information
        // is available in the IPN POST variables.  Basically, all the POST vars
        // which paypal sends, which we send back for validation, are now stored
        // in the ipn_data() array.

        // For this example, we'll just email ourselves ALL the data.
        $subject = 'Instant Payment Notification - Recieved Payment';
        $to = 'info@agorasturias.org';    //  your email
        $body =  "An instant payment notification was successfully recieved\n";
        $body .= "from ".$p->ipn_data['payer_email']." on ".date('m/d/Y');
        $body .= " at ".date('g:i A')."\n\nDetails:\n";

        foreach ($p->ipn_data as $key => $value) { $body .= "\n$key: $value"; }

        //mail($to, $subject, $body);

        $p->log_ipn_results(TRUE);
      }
      break;

    default:
      break;
    }
  });

?>
