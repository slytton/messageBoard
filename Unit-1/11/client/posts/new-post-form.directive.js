angular.module('RedditClone')
  .directive('rcNewPostForm', directive)


directive.$inject = [];

function directive(postsService, AuthService){
  return {
    restrict: 'E',
    templateUrl: '/posts/new-post-form.directive.html',
    scope: {
      show: "="
    },
    controllerAs: 'vm',
    controller: controller,
    link: function(scope, element){
      }
    }
  }

  controller.$inject = ['$scope', 'postsService', 'AuthService'];

  function controller($scope, postsService, AuthService){
    var vm = this;

    vm.addPost = function(){
      var newPost = angular.copy(vm.postsForm);
      newPost.author_id = AuthService.session.currentUser.id;
      postsService.create(newPost);
      vm.postsForm = {};
      $scope.addPostForm.$setPristine();
      $scope.show = false;
  }
}
