angular.module('RedditClone')
  .directive('rcPosts', ['postsService', PostsDirective]);
    function PostsDirective(PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {
          search: "=",
          sort: "="
        },
        link: function(scope, element){
          scope.vm = {};
          scope.vm.posts = PostsService.posts
          //console.log(scope.vm.posts);
        }
      };
    }
