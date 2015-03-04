function shop() {
  
  this.products = [
    new product (1, 'PARTICIPATION FEE', 'AgorAsturias participation fee', '55', 'public/img/shop/fee.png'),
    new product (2, 'MATTRESS', 
        'For sleeping at a CAMPSITE. For 2 persons. 140X190cm. Flocked outer for comfort. 2-year guarantee!', 
        '19.75', 'public/img/shop/mattress.png')
  ];
}

shop.prototype.getProduct = function (id) {
  
  for (var i = 0; i < this.products.length; i++) {
    if (this.products[i].id === id) {
      return this.products[i];
    }
  }
  return null;
};