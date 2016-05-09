angular.module('teaApp')
  .directive('gsCart', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/cart/cart.html',
      scope: {
        cart: "=",
        update: "=",
        remove: "=",
        checkout: "="
      },
      link: function(scope, element){
        scope.vm = {};
        scope.vm.editing = false;
      }
    };
  })
