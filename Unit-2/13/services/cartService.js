angular.module('teaApp')
  .service('cartService', [function(){
    var _cart = {
      numItems: 0,
      total: 0
    };
    var cartService = {
      getCart: function(){
        return _cart
      },
      addToCart: function(tea, quantity){
        if (_cart[tea._id]) {
          _cart[tea._id].quantity += +quantity;
        }else{
          tea.quantity = quantity;
          _cart[tea._id] = tea;
          _cart.numItems++;
        }
        _updateItemTotal(tea);
        console.log('addToCart', _cart);
        return _updateCartTotal();
      },
      updateTeaQuantity: function(tea, quantity){

        if(quantity === 0) {
          delete _cart[tea._id];
          _cart.numItems--;
        }else{
          _cart[tea._id].quantity = quantity;
          _updateItemTotal(tea);
        }

        return _updateCartTotal();
      }
    }

    return cartService;

    function _updateCartTotal(){
      _cart.total = 0;
      for (var tea in _cart) {
        if (_cart.hasOwnProperty(tea)) {
          tea = _cart[tea];
          if (typeof tea === 'object') {
            _cart.total += tea.total;
          }
        }
      }
      return _cart;
    }

    function _updateItemTotal(item){
      item.total = (item.price * item.quantity) / 100;
    }

  }])
