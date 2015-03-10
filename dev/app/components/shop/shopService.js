agorasturiasApp.factory('ShopService', ['Data', function(Data) {
    
    var _shop = new shop(Data),
        _cart = new cart("AgoraShop");

    _cart.addCheckoutParameters("PayPal", "E5YL58382ENDE");
    // _cart.addCheckoutParameters("PayPal", "M88EFJFDDQ5DY"); // TODO AEGEE-Oviedo
  
    return {
        shop: _shop,
        cart: _cart
    };
}]);
