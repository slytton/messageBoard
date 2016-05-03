angular.module('RedditClone')
  .directive('rcPosts', ['$timeout', 'postsService', PostsDirective]);
    function PostsDirective($timeout, PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {
          filters: '='
        },
        link: function(scope, element){
          console.log($timeout);
          scope.vm = {};
          scope.vm.posts = PostsService.posts
        }
      };
    }
