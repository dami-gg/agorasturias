agorasturiasApp.factory('ShopService', function() {
    
    var _shop = new shop(),
        _basket = new basket("AngularStore");
  
    return {
        shop: _shop,
        basket: _basket
    };
});
