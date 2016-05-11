angular.module('RedditClone')
  .directive('rcNewPostForm', ['postsService', function(postsService){
    return {
      restrict: 'E',
      templateUrl: '/directives/new-post-form/new-post-form.html',
      scope: {
        postForm  : '='
      },
      link: function(scope, element){
        scope.addPost = function(){
          var newPost = angular.copy(scope.vm.postsForm);
          postsService.create(newPost);
          scope.vm.postsForm = {};
          scope.addPostForm.$setPristine();
          scope.postForm.showAddPostForm = false;
        }
      }
    }
  }])
