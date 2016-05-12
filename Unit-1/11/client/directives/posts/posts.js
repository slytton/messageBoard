angular.module('RedditClone')
  .directive('rcPosts', ['$timeout', 'postsService', PostsDirective]);
    function PostsDirective($timeout, PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {
        },
        link: function(scope, element){
          scope.vm = {};
          scope.filters = PostsService.filters;
          PostsService.list().then(function(posts){
            scope.vm.posts = posts;
          })
          scope.vm.upVote = function(post){
            PostsService.upVote(post);
          }
          scope.vm.downVote = function(post){
            PostsService.downVote(post);
          }
          scope.vm.createComment = function(post, comment){
            return PostsService.createComment(post, comment);
          }
        }
      };
    }
