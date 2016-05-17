(function() {
  angular.module('RedditClone')
    .directive('rcLogin', directive);

  directive.$inject = ['AuthService', '$state'];

  function directive(AuthService, $state){
    return {
      restrict: "E",
      templateUrl: "/auth/login.directive.html",
      scope: {},
      link: function(scope, element){
        scope.vm = {};

        scope.vm.login = function(){
          AuthService.login(scope.vm.user).then(function(){
            $state.go('posts');
          }).catch(function(err){
            scope.vm.errors = err.errors;
          })
        }
      }
    }
  }
})();
