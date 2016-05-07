angular.module('teaApp')
  .directive('gsTeas', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/teas/teas.html',
      scope: {
        teas: "=",
        filters: "=",
        addToBag: "="
      },
      link: function(scope, element){
        console.log(scope);
      }
    }
  })
