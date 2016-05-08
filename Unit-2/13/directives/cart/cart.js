angula.module('teaApp')
  .directive('gsCart', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/cart/cart.html',
      scope: {
        cart: "="
      },
      link: function(scope, element){
        
      }
    };
  })
