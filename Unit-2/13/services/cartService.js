angular.module('teaApp')
  .service('cartService', function(){
    var _cart = {
      numItems: 0
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
        console.log('addToCart', _cart);
        return _cart;
      },
      updateTeaQuantity: function(tea, quantity){
        var index = _cart.indexOf(tea);
        _cart[index].quantity = quantity;
        if(quantity === 0) {
          _cart.splice(index, 1);
          _cart.numItems--;
        }
        return _cart;
      }
    }
    return cartService;
  })
