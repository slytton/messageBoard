(function() {
  angular.module('RedditClone')
    .directive('rcLayout', function() {
      return {
        restrict: 'E',
        templateUrl: '/layout/layout.directive.html',
        scope: {},
        controller: controller,
        controllerAs: 'vm'
      };

      function controller(){

      }
    });
})();
