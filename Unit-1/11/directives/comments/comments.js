angular.module('RedditClone')
  .directive('rcComments', ['postsService', function(postsService){
    return {
      restrict: 'E',
      templateUrl: '/directives/comments/comments.html',
      scope: {
        post: "=",
        showingComments: "=",
        showingAddComment: "="
      },
      link: function(scope, element){
        scope.addComment = function(postId, subScope){
          var post = postsService.getPost(postId);

          var copiedComment = angular.copy(subScope.commentsForm);
          Object.keys(subScope.commentsForm).map(function(key){
            return delete subScope.commentsForm[key];
          })

          copiedComment.createdAt = new Date();

          post.comments.push(copiedComment);

          subScope.addCommentForm.$setPristine();
          subScope.showComments = true;
        }
      }
    }
  }])
