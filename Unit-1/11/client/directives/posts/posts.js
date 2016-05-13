angular.module('RedditClone')
  .directive('rcPosts', ['$timeout', 'postsService', PostsDirective]);
    function PostsDirective($timeout, PostsService) {
      return {
        restrict: 'E',
        templateUrl: '/directives/posts/posts.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {
          user: '='
        },
        link: function(scope, element){
          console.log('In posts', scope.user);
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
          scope.vm.removePost = function(post){
            PostsService.removePost(post);
          }
          scope.vm.removeComment = function(post, comment){
            PostsService.removePost(post, comment);
          }
        }
      };
    }
