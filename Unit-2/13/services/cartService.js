angular.module('teaApp')
  .service('cartService', [function(){

    function Cart(){
      var cart = {};
      Object.defineProperty(cart, 'numItems', { value: 0, writable: true });
      Object.defineProperty(cart, 'total', { value: 0, writable: true });
      return cart;
    }
    var _cart = new Cart()
    console.log(_cart);
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
          console.log(_cart.numItems);
          _cart.numItems += 1;
        }
        _updateItemTotal(tea);
        console.log('addToCart', _cart);
        return _updateCartTotal();
      },
      updateTeaQuantity: function(teaId, quantity){
        console.log("in update, quantity: ", quantity);
        quantity = +quantity;

        if(quantity === 0) {
          this.removeTea(teaId);
        }else{
          _cart[teaId].quantity = quantity;
          _updateItemTotal(_cart[teaId]);
        }

        return _updateCartTotal();
      },

      removeTea: function(teaId){
        delete _cart[teaId];
        _cart.numItems--;
      },

      checkout: function(){
        _cart = new Cart();
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
