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
        template: '<rc-layout user="user"></rc-layout>',
        controller: setUser,
        resolve: {
          user: getMe
        }
      })
      .state('posts', {
        url: "/",
        template: "<rc-posts user='user'></rc-posts>",
        controller: setUser,
        parent: 'layout'
      })
      .state('signup', {
        loggedOutOnly: true,
        url: "/signup",
        template: "<rc-signup user='user'></rc-signup>",
        controller: setUser,
        parent: 'layout'
      })
      .state('login', {
        loggedOutOnly: true,
        url: "/login",
        template: "<rc-login user='user'></rc-login>",
        controller: setUser,
        parent: 'layout'
      })

      $httpProvider.interceptors.push("AuthInterceptorService");
  }

  getMe.$inject = ['AuthService']

  function getMe(AuthService) {
    return AuthService.me();
  }

  setUser.$inject = ["$scope", "user"]

  function setUser($scope, user){
    $scope.user = user;
  }

})();
