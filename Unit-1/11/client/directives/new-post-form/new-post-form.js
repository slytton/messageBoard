angular.module('RedditClone')
  .directive('rcNewPostForm', ['postsService', 'AuthService', function(postsService, AuthService){
    return {
      restrict: 'E',
      templateUrl: '/directives/new-post-form/new-post-form.html',
      scope: {
        show: "="
      },
      link: function(scope, element){
        scope.user = AuthService.getUser();
        scope.addPost = function(){
          var newPost = angular.copy(scope.vm.postsForm);
          newPost.author_id = scope.user.id;
          postsService.create(newPost);
          scope.vm.postsForm = {};
          scope.addPostForm.$setPristine();
          scope.show = false;
        }
      }
    }
  }])
