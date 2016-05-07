angular.module('teaApp')
  .directive('gsTeas', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/teas/teas.html',
      scope: {
        teas: "=",
        filters: "="
      },
      link: function(scope, element){
        console.log(scope);
      }
    }
  })
