function basket(basketName) {
    this.basketName = basketName;
    this.clearBasket = false;
    this.checkoutParameters = {};
    this.items = [];

    // load items from local storage when initializing
    this.loadItems();

    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearBasket) {
            self.clearItems();
        }
        self.saveItems();
        self.clearBasket = false;
    });
}

// load items from local storage
basket.prototype.loadItems = function () {
    var items = localStorage !== null ? localStorage[this.basketName + "_items"] : null;
    if (items !== null && JSON !== null) {
        try {
            items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.sku !== null && item.name !== null && item.price !== null && item.quantity !== null) {
                    item = new cartItem(item.sku, item.name, item.price, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
};

// save items to local storage
basket.prototype.saveItems = function () {
    if (localStorage !== null && JSON !== null) {
        localStorage[this.basketName + "_items"] = JSON.stringify(this.items);
    }
};

// adds an item to the cart
basket.prototype.addItem = function (id, name, price, quantity) {
    quantity = this.toNumber(quantity);
    if (quantity !== 0) {

        // update quantity for existing item
        var found = false,
            item = null;
        for (var i = 0; i < this.items.length && !found; i++) {
            item = this.items[i];
            if (item.id === id) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }

        // new item, add now
        if (!found) {
            item = new basketItem(id, name, price, quantity);
            this.items.push(item);
        }

        // save changes
        this.saveItems();
    }
};

basket.prototype.getTotalPrice = function (id) {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === null || item.id === id) {
            total += this.toNumber(item.quantity * item.price);
        }
    }
    return total;
};

basket.prototype.getTotalCount = function (id) {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === null || item.id === id) {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
};

// clear the cart
basket.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
};

basket.prototype.checkout = function () {
  
  
};

// utility methods
basket.prototype.addFormFields = function (form, data) {
    if (data !== null) {
        $.each(data, function (name, value) {
            if (value !== null) {
                var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                form.append(input);
            }
        });
    }
};

basket.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
};

function basketItem(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
}