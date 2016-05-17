angular.module('RedditClone')
  .directive('rcPosts', ['$timeout', 'postsService', 'AuthService', '$location', PostsDirective]);
    function PostsDirective($timeout, PostsService, AuthService, $location) {
      return {
        restrict: 'E',
        templateUrl: '/posts/posts.directive.html',
        //controller: 'PostsController as PostsCtrl',
        scope: {},
        link: function(scope, element){
          scope.vm = {};
          console.log($location);
          scope.vm.session = AuthService.session;
          scope.filters = PostsService.filters;
          PostsService.list().then(function(posts){
            scope.vm.posts = posts;
            console.log('In posts', posts);
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
            PostsService.removeComment(post, comment);
          }
          scope.vm.unFavorite = function(post){
            PostsService.unFavorite(post);
          }
          scope.vm.favorite = function(post){
            PostsService.favorite(post);
          }
        }
      };
    }
