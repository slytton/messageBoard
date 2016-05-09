angular.module('teaApp')
  .controller('HomeController', ['$scope', 'teaService', 'cartService', function($scope, teaService, cartService){
    this.filters = {};
    this.categories = teaService.getCategories();
    this.teas = teaService.getTeas();
    this.cart = cartService.getCart();
    this.addToBag = function(tea, quantity){
      this.cart = cartService.addToCart(tea, quantity);
    }
  }])
