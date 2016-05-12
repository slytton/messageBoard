angular.module('RedditClone')
  .directive('rcHeader', ['postsService', function (postsService) {
    return {
      restrict: 'E',
      templateUrl: '/layout/header.directive.html',
      scope: {
        user: "="
      },
      link: function(scope, element){
        scope.vm = {};
        scope.filters = postsService.filters;
      }
    };
  }]);
