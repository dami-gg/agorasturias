agorasturiasApp.controller('ShopCtrl',
    function ($scope, $stateParams, ShopService, $location, Data, LoginService) {

    $scope.shop = ShopService.shop;
    $scope.cart = ShopService.cart;

    $scope.orderId = -1;
    $scope.paypalCharge = ($scope.cart.getTotalPrice() * 0.0355) + (0.35 * 1.0355);

    var _productId = $stateParams.productId;

    if ($location.path().lastIndexOf("/product", 0) === 0 && _productId !== null) {

        if (isNaN(_productId)) {
            $location.path ('/shop');
        }
        else {
            $scope.product = $scope.shop.getProduct(parseInt(_productId));
        }
    }
    else if ($location.path().lastIndexOf("/checkout", 0) === 0 && $scope.cart.items.length === 0) {
        $location.path ('/shop');
    }

    $scope.goToShop = function() {
        $location.path ('/shop');
    };

    $scope.openProductDescription = function(productId) {
        $location.path ('/product/' + productId);
    };

    $scope.goToCart = function() {
        $location.path ('/shopping-cart');
    };

    $scope.goToCheckout = function() {
        $location.path ('/checkout');
    };

    $scope.saveOrder = function(paymentType) {
        Data.post('orders', {
          username: LoginService.session.username,
          products: $scope.cart.items,
          bankTransfer: (paymentType === 'Transfer')
        }).then(function (response) {

          if (response.status === "success") {
            $scope.orderId = response.orderID;

            if (paymentType === 'PayPal') {
                $scope.cart.checkout(paymentType, orderId, $scope.paypalCharge);
            }
            else {
                $scope.cart.items = [];
            }
          }
          else {
            $scope.notify('Error: ' + response.message, 'danger');
          }
      });
    };

    $scope.confirmOrder = function() {
        $scope.saveOrder('Transfer');
    };
});
