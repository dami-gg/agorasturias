function shop(Data) {
  
  this.products = [];

  var self = this;

  Data.get('products').then(function(response) {    
    if (response.status === "success") {
      angular.extend(self.products, response.products);
    }
  });
}

shop.prototype.getProduct = function (id) {
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === id) {
      return this.products[i];
    }
  }
  return null;
};
