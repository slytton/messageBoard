angular.module('RedditClone')
  .directive('posts', ['postsService', PostsDirective]);
    function PostsDirective(PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        controller: 'PostsController as PostsCtrl',
        bindToController: true,
        scope: {
          search: "=",
          sort: "="
        },
        link: function(scope, element){
          scope.vm.posts = PostsService.posts
          console.log(scope.vm.posts);
        }
      };
    }
