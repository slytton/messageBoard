angular.module('RedditClone')
  .directive('rcHeader', ['postsService', 'AuthService', '$interval', '$location', function (postsService, AuthService, $interval, $location) {
    return {
      restrict: 'E',
      templateUrl: '/layout/header.directive.html',
      scope: {},
      link: function(scope, element){
        scope.vm = {};
        scope.vm.path = $location.path();
        scope.$on('$stateChangeSuccess', function(event, state){
          scope.vm.path = $location.path();
        })

        scope.user = AuthService.getUser();
        scope.$watch(function(){
          return AuthService.getUser();
        },
        function (newUser) {
          scope.user = newUser;
        }, true);

        //console.log(scope.user);
        scope.filters = postsService.filters;
        scope.vm.logout = function(){
          scope.user = AuthService.logout();
        }
      }
    };
  }]);
