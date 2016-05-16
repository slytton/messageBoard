(function() {
  angular.module('RedditClone')
  .directive('rcComments', directive);

  directive.$inject = [];

  function directive(){
    return {
      restrict: 'E',
      templateUrl: '/posts/comments.directive.html',
      scope: {
        post: "=?",
        addComment: "=?",
        removeComment: "=?"
      },
      controller: controller,
      controllerAs: 'vm'
      // link: function(scope, element){
      // }
    }
  }

  controller.$inject = ['$scope', 'AuthService', 'postsService']

  function controller($scope, AuthService, postsService){
    var vm  = this;

    vm.session = AuthService.session;

    console.log('comments auth', AuthService.session);

    vm.createComment = function(post, comment, subScope){
      console.log('createComment directives');

      var copiedComment = angular.copy(subScope.commentsForm);
      $scope.addComment(post, copiedComment).then(function(){

        console.log('addComment directives');
        subScope.addCommentForm.$setPristine();
        subScope.showComments = true;
        Object.keys(subScope.commentsForm).forEach(function(key){
          delete subScope.commentsForm[key];
        });
      })
    }

    vm.removeComment = function(post, comment){
      console.log("calling remove comment");
      $scope.removeComment(post, comment);
    }
  }
})();
