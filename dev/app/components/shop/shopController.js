agorasturiasApp.controller('ShopCtrl', function ($scope, $stateParams, ShopService, $location) {

    $scope.shop = ShopService.shop;
    $scope.basket = ShopService.basket;

    var _productId = $stateParams.productId;

    if ($location.path().startsWith("/product") && _productId !== null) {
    
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

    $scope.goToBasket = function() {
        $location.path ('/basket');
    };
});