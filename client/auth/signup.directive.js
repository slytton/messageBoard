(function() {
  angular.module('RedditClone')
    .directive('rcSignup', directive);

  directive.$inject = ['AuthService', '$state'];

  function directive(AuthService, $state){
    return {
      restrict: "E",
      templateUrl: "/auth/signup.directive.html",
      scope: {},
      link: function(scope, element){
        scope.vm = {};
        scope.vm.signup = function(){
          scope.vm.errors = [];
          AuthService.signup(scope.vm.newUser).then(function(res){
            $state.go('posts');
          }).catch(function(err){
            scope.vm.errors = err.errors;
          })
        }
      }
    }
  }
})();
