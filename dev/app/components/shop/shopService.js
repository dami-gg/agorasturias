agorasturiasApp.factory('ShopService', function() {
    
    var _shop = new shop(),
        _cart = new cart("AngularStore");
  
    return {
        shop: _shop,
        cart: _cart
    };
});
