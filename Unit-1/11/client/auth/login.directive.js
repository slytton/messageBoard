(function() {
  angular.module('RedditClone')
    .directive('rcLogin', directive);

  directive.$inject = [];

  function directive(){
    return {
      restrict: "E",
      templateUrl: "/auth/login.directive.html",
      scope: {},
      link: function(scope, element){

      }
    }
  }
})();
