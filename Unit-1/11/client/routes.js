(function() {
  console.log('routes');
  angular.module('RedditClone')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

  function routes($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode(true);

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
      .state('favorites', {
        url: "/favorites",
        template: "<rc-posts></rc-posts>",
        controller: ['postsService', function(postsService) {
          postsService.filters.favorites = true;
          console.log('route favorites');
        }],
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
