angular.module('RedditClone')
  .directive('rcHeader', ['postsService', 'AuthService', function (postsService, AuthService) {
    return {
      restrict: 'E',
      templateUrl: '/layout/header.directive.html',
      scope: {
        user: "="
      },
      link: function(scope, element){
        console.log(scope.user);
        scope.vm = {};
        scope.filters = postsService.filters;
        scope.logout = function(){
          AuthService.logout();
        }
      }
    };
  }]);
