(function() {
  console.log('routes');
  angular.module('RedditClone')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
      .state('layout', {
        url: "/",
        template: "<rc-layout></rc-layout>"
      })
      .state('layout.signup', {
        url: "/signup",
        template: "<rc-signup></rc-signup>",
      })
      .state('layout.login', {
        url: "/login",
        template: "<rc-login></rc-login>"
      });
  }
})();
