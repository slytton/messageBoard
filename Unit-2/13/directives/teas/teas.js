angular.module('teaApp')
  .directive('gsTeas', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/teas/teas.html',
      scope: {
        teas: "="
      },
      link: function(scope, element){
        
      }
    }
  })
