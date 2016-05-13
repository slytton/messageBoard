(function() {
  console.log('routes');
  angular.module('RedditClone')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function routes($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('layout',{
        abstract: true,
        template: '<rc-layout></rc-layout>',
        resolve: {
          user: getMe
        }
      })
      .state('posts', {
        url: "/",
        template: "<rc-posts></rc-posts>",
        parent: 'layout'
      })
      .state('signup', {
        loggedOutOnly: true,
        url: "/signup",
        template: "<rc-signup></rc-signup>",
        parent: 'layout'
      })
      .state('login', {
        loggedOutOnly: true,
        url: "/login",
        template: "<rc-login></rc-login>",
        parent: 'layout'
      })

      $httpProvider.interceptors.push("AuthInterceptorService");
  }

  getMe.$inject = ['AuthService']

  function getMe(AuthService) {
    return AuthService.me();
  }

})();
