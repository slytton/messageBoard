angular.module('RedditClone')
  .directive('rcPosts', ['postsService', PostsDirective]);
    function PostsDirective(PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {
          filters: '='
        },
        link: function(scope, element){
          scope.vm = {};
          scope.vm.posts = PostsService.posts
        }
      };
    }
