(function() {
  angular.module('RedditClone')
  .directive('rcNewPostForm', directive)

  directive.$inject = [];

  function directive(){
    return {
      restrict: 'E',
      templateUrl: '/posts/new-post-form.directive.html',
      scope: {
        show: "="
      },
      controller: controller,
      controllerAs: 'vm',
      // link: function(scope, element){
      //   }
    }
  }

  controller.$inject = ['$scope', 'postsService', 'AuthService'];

  function controller($scope, postsService, AuthService){
    var vm = this;
    this.session = AuthService.session;
    vm.addPost = function(){
      var newPost = angular.copy(vm.postsForm);
      newPost.author_id = AuthService.session.currentUser.id;
      postsService.create(newPost);
      vm.postsForm = {};
      $scope.addPostForm.$setPristine();
      $scope.show = false;
    }
  }
})();
