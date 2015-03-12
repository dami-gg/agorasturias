agorasturiasApp.controller('ShopCtrl',
    function ($scope, $stateParams, ShopService, $location, Data, LoginService) {

    $scope.shop = ShopService.shop;
    $scope.cart = ShopService.cart;

    $scope.orderId = -1;

    var _productId = $stateParams.productId;

    if ($location.path().lastIndexOf("/product", 0) === 0 && _productId !== null) {

        if (isNaN(_productId)) {
            $location.path ('/shop');
        }
        else {
            $scope.product = $scope.shop.getProduct(parseInt(_productId));
        }
    }
    else if ($location.path().lastIndexOf("/checkout", 0) === 0 && orderId === -1) {
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

    $scope.saveOrder = function(goToCheckoutPage) {
        Data.post('orders', {
          username: LoginService.session.username,
          products: $scope.cart.items
        }).then(function (response) {

          if (response.status === "success") {
            $scope.orderId = response.orderID;
            $scope.cart.checkout('PayPal');
            if (goToCheckoutPage) {
                $scope.cart.items = [];
                $scope.goToCheckout();
            }
          }
          else {
            $scope.notify('Error: ' + response.message, 'danger');
          }
      });
    };
});
