function cart(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.checkoutParameters = {};
    this.items = [];

    // load items from local storage when initializing
    this.loadItems();

    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
}

// load items from local storage
cart.prototype.loadItems = function () {
    var items = localStorage !== null ? localStorage[this.cartName + "_items"] : null;
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
cart.prototype.saveItems = function () {
    if (localStorage !== null && JSON !== null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
};

// adds an item to the cart
cart.prototype.addItem = function (id, name, price, quantity) {
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
            item = new cartItem(id, name, price, quantity);
            this.items.push(item);
        }

        // save changes
        this.saveItems();
    }
};

cart.prototype.getTotalPrice = function (id) {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === undefined || item.id === id) {
            total += this.toNumber(item.quantity * item.price);
        }
    }
    return total;
};

cart.prototype.getTotalCount = function (id) {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (id === undefined || item.id === id) {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
};

// clear the cart
cart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
};

// utility methods
cart.prototype.addFormFields = function (form, data) {
    if (data !== null) {
        var _input;
        $.each(data, function (name, value) {
            if (value !== null) {
                _input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
                form.append(_input);
            }
        });
    }
};

cart.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
};

cart.prototype.addCheckoutParameters = function (serviceName, merchantID, options) {

    if (serviceName !== "PayPal") {
        throw "serviceName must be 'PayPal'";
    }
    if (merchantID === null) {
        throw "A merchantID is required in order to checkout.";
    }

    this.checkoutParameters[serviceName] = new checkoutParameters(serviceName, merchantID, options);
};

cart.prototype.checkout = function (serviceName, clearCart) {

  if (serviceName === null) {
    var _aux = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
    serviceName = _aux.serviceName;
  }
  if (serviceName === null) {
    throw "Define at least one checkout service.";
  }

  var params = this.checkoutParameters[serviceName];
  if (params === null) {
    throw "Cannot get checkout parameters for '" + serviceName + "'.";
  }

  if(params.serviceName === "PayPal") {
    this.checkoutPayPal(params, clearCart);
  }
  else {
    throw "Unknown checkout service: " + params.serviceName;
  }
};

// http://www.paypal.com/cgi-bin/webscr?cmd=p/pdn/howto_checkout-outside
cart.prototype.checkoutPayPal = function (parms, clearCart) {

    // global data
    var data = {
        cmd: "_cart",
        business: parms.merchantID,
        upload: "1",
        rm: "2",
        charset: "utf-8",
        currency_code: "EUR",
        return: "http://ec2-54-72-219-198.eu-west-1.compute.amazonaws.com/#/profile",
        cancel_return: "http://ec2-54-72-219-198.eu-west-1.compute.amazonaws.com/#/profile"
        notify_url: "http://ec2-54-72-219-198.eu-west-1.compute.amazonaws.com/api/v1/ipn_notify"
    };

    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var ctr = i + 1;
        data["item_number_" + ctr] = item.id;
        data["item_name_" + ctr] = item.name;
        data["quantity_" + ctr] = item.quantity;
        data["amount_" + ctr] = item.price.toFixed(2);
    }

    // build form
    var form = $('<form></form>');
    form.attr("action", "https://www.sandbox.paypal.com/cgi-bin/webscr");
    // form.attr("action", "https://www.paypal.com/cgi-bin/webscr"); TODO
    form.attr("method", "POST");
    form.attr("style", "display:none;");
    this.addFormFields(form, data);

    if (parms.options !== undefined) {
        this.addFormFields(form, parms.options);
    }

    $("body").append(form);

    // submit form
    this.clearCart = clearCart === undefined || clearCart;

    // TODO Send email with order or persist
    form.submit();
    form.remove();
};

function checkoutParameters(serviceName, merchantID, options) {
    this.serviceName = serviceName;
    this.merchantID = merchantID;
    this.options = options;
}

function cartItem(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
}
