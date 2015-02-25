agorasturiasApp.factory('ShopService', function() {
    
    var _shop = new shop(),
        _cart = new cart("AgoraShop");

    _cart.addCheckoutParameters("PayPal", "XXX PayPal merchant account id"); // TODO
  
    return {
        shop: _shop,
        cart: _cart
    };
});
