(function() {
  angular.module('RedditClone')
    .directive('rcLayout', function() {
      return {
        restrict: 'E',
        templateUrl: '/layout/layout.directive.html',
        scope: {
          user: "="
        },
        controller: controller,
        controllerAs: 'vm'
      };

      function controller(){
        //console.log('layout controller ' + this.user);
      }
    });
})();
