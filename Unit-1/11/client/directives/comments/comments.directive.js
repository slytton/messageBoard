angular.module('RedditClone')
  .directive('rcComments', ['postsService', function(postsService){
    return {
      restrict: 'E',
      templateUrl: '/directives/comments/comments.directive.html',
      scope: {
        post: "=",
        addComment: "="
      },
      link: function(scope, element){
        scope.vm = {};

        scope.vm.createComment = function(post, comment, subScope){
          console.log('createComment directives');

          var copiedComment = angular.copy(subScope.commentsForm);

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
