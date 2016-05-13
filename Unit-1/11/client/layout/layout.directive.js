(function() {
  angular.module('RedditClone')
    .directive('rcLayout', directive)

  directive.$inject = [];

  function directive() {
    return {
      restrict: 'E',
      templateUrl: '/layout/layout.directive.html',
      scope: {},
      controller: controller,
      controllerAs: 'vm'
    };

    function controller(){
      //console.log('layout controller ' + this.user);
    }
  };

})();
