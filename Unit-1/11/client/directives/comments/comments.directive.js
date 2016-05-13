angular.module('RedditClone')
  .directive('rcComments', ['postsService','AuthService', function(postsService, AuthService){
    return {
      restrict: 'E',
      templateUrl: '/directives/comments/comments.directive.html',
      scope: {
        post: "=",
        addComment: "=",
        removeComment: "="
      },
      link: function(scope, element){
        scope.vm = {};
        scope.user = AuthService.getUser();

        scope.$watch(function(){
          return AuthService.getUser();
        },
        function (newUser) {
          scope.user = newUser;
        }, true);

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

        scope.vm.removeComment = function(post, comment){
          console.log("calling remove comment");
          scope.removeComment(post, comment);
        }
      }
    }
  }])
