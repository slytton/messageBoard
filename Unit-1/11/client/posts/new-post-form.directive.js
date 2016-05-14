angular.module('RedditClone')
  .directive('rcNewPostForm', ['postsService', 'AuthService', function(postsService, AuthService){
    return {
      restrict: 'E',
      templateUrl: '/posts/new-post-form.directive.html',
      scope: {
        show: "="
      },
      link: function(scope, element){
        scope.session = AuthService.session;
        scope.addPost = function(){
          var newPost = angular.copy(scope.vm.postsForm);
          newPost.author_id = scope.session.currentUser.id;
          postsService.create(newPost);
          scope.vm.postsForm = {};
          scope.addPostForm.$setPristine();
          scope.show = false;
        }
      }
    }
  }])
