angular.module('RedditClone')
  .directive('rcComments', ['postsService','AuthService', function(postsService, AuthService){
    return {
      restrict: 'E',
      templateUrl: '/directives/comments/comments.directive.html',
      scope: {
        post: "=",
        addComment: "="
      },
      link: function(scope, element){
        scope.vm = {};
        scope.user = AuthService.getUser();

        scope.vm.createComment = function(post, comment, subScope){
          console.log('createComment directives');

          var copiedComment = angular.copy(subScope.commentsForm);
          copiedComment.author_id = scope.user.id;
          scope.addComment(post, copiedComment).then(function(){

            console.log('addComment directives');
            subScope.addCommentForm.$setPristine();
            subScope.showComments = true;
            Object.keys(subScope.commentsForm).forEach(function(key){
              delete subScope.commentsForm[key];
            });
          })
        }
      }
    }
  }])
