agorasturiasApp.factory('ShopService', ['Data', function(Data) {

    var _shop = new shop(Data),
        _cart = new cart("AgoraShop");

    // _cart.addCheckoutParameters("Paypal", "E5YL58382ENDE"); Test sandbox
    _cart.addCheckoutParameters("Paypal", "M88EFJFDDQ5DY");

    return {
        shop: _shop,
        cart: _cart
    };
}]);
