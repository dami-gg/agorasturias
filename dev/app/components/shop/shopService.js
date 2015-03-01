agorasturiasApp.factory('ShopService', function() {
    
    var _shop = new shop(),
        _cart = new cart("AgoraShop");

    _cart.addCheckoutParameters("PayPal", "E5YL58382ENDE");
    // _cart.addCheckoutParameters("PayPal", "M88EFJFDDQ5DY"); // TODO AEGEE-Oviedo
    _cart.addCheckoutParameters("TransferWise", "XXX TransferWise merchant account id"); // TODO
  
    return {
        shop: _shop,
        cart: _cart
    };
});
