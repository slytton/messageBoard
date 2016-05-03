console.log('hello');
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
        console.log(scope.post);

        scope.addComment = function(postId, subScope){
          var post = postsService.posts.filter(function(post){
            console.log(post.id);
            return post.id === postId;
          })[0];

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
