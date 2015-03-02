agorasturiasApp.controller('ShopCtrl', function ($scope, $stateParams, ShopService, $location) {

    $scope.shop = ShopService.shop;
    $scope.cart = ShopService.cart;

    var _productId = $stateParams.productId;

    if ($location.path().lastIndexOf("/product", 0) === 0 && _productId !== null) {
    
        if (isNaN(_productId)) {
            $location.path ('/shop');
        }
        else {
            $scope.product = $scope.shop.getProduct(parseInt(_productId));
        }
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
});