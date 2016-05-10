angular.module('RedditClone')
  .directive('rcHeader', ['postsService', function (postsService) {
    return {
      restrict: 'E',
      templateUrl: '/directives/header/header.html',
      scope: {
        filters: '='
      },
      link: function(scope, element){
        scope.vm = {};
      }
    };
  }]);
