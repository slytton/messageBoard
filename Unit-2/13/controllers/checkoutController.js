angular.module('teaApp')
  .controller('CheckoutController', ['$scope', '$state', '$stateParams', 'cartService', function($scope, $state, $stateParams, cartService){
    this.cart = cartService.getCart();
    this.update = function(teaId, quantity){
      this.cart = cartService.updateTeaQuantity(teaId, quantity);
    }
    this.remove = function(teaId){
      this.cart = cartService.removeTea(teaId);
    }
    this.checkout = function(){
      cartService.checkout();
      $state.go('thanks');
    }
  }])
