angular.module('RedditClone')
  .directive('rcHeader', directive)

// directive.$inject = ['postsService', 'AuthService', '$interval', '$location'];


function directive() {
  return {
    restrict: 'E',
    templateUrl: '/layout/header.directive.html',
    scope: {},
    controllerAs: "vm",
    controller: controller,
    link: function(scope, element){
    }
  };

  controller.$inject = ['$scope', 'postsService', 'AuthService', '$interval', '$location'];

  function controller($scope, postsService, AuthService, $interval, $location) {
    var vm = this;
    vm.path = $location.path();
    $scope.$on('$stateChangeSuccess', function(event, state){
      vm.path = $location.path();
    })

    vm.session = AuthService.session;

    vm.filters = postsService.filters;
    vm.logout = function(){
      vm.user = AuthService.logout();
    }
  }
};
