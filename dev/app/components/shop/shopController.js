agorasturiasApp.controller('ShopCtrl', function ($scope, $stateParams, ShopService) {

    $scope.shop = ShopService.shop;
    $scope.basket = ShopService.basket;

    var _productId = $stateParams.productId;

    if (_productId !== null) {
    
        $scope.product = $scope.shop.getProduct(_productId);
    }
});