angular.module('RedditClone')
  .directive('rcComments', directive);


  directive.$inject = [];


  function directive(postsService){
    return {
      restrict: 'E',
      templateUrl: '/posts/comments.directive.html',
      scope: {
        post: "=",
        addComment: "=",
        removeComment: "="
      },
      controllerAs: 'vm',
      controller: controller,
      link: function(scope, element){
      }
    }
  }

  controller.$inject = ['$scope', 'AuthService', 'postsService']

  function controller($scope, AuthService, post){
    var vm  = this;

    vm.user = AuthService.getUser();

    $scope.$watch(function(){
      return AuthService.getUser();
    },
    function (newUser) {
      vm.user = newUser;
    }, true);

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
      vm.removeComment(post, comment);
    }
  }
