angular.module('teaApp')
  .directive('gsNav', ['$state', '$stateParams', '$location', function($state, $stateParams, $location){
    return {
      restrict: 'E',
      templateUrl: '/directives/nav/nav.html',
      scope: {},
      link: function(scope, element){
        scope.vm = {};
        scope.$on('$stateChangeSuccess', function(){
          scope.vm.location = $location.$$path;
        })

        console.log(scope.vm.location);
        console.log($location);
      }
    };
  }]);
