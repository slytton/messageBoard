(function() {
  console.log('routes');
  angular.module('RedditClone')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function routes($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('layout', {
        isProtected: true,
        url: "/",
        template: "<rc-layout></rc-layout>",
        resolve: {
          user: getMe
        }
      })
      .state('layout.signup', {
        url: "/signup",
        template: "<rc-signup></rc-signup>",
      })
      .state('layout.login', {
        url: "/login",
        template: "<rc-login></rc-login>"
      });

      // register the interceptor via an anonymous factory
      $httpProvider.interceptors.push(interceptors);
      function interceptors($q) {
        return {
         'request': function(req) {
            var token = localStorage.getItem('token');
            if (token) req.headers.authentication = token;
            return req;
          },

          'response': function(response) {
            return response;
          }
        };
      }
  }

  getMe.$inject = ['AuthService']
  function getMe(AuthService) {
    return AuthService.me();
  }

})();
