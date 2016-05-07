angular.module('teaApp')
  .controller('CheckoutController', ['$scope', '$stateParams', 'cartService', function($scope, $stateParams, cartService){
    this.cart = cartService.getCart();

  }])
