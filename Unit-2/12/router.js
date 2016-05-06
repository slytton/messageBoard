angular.module('movieApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'AppController',
        templateUrl: 'partials/homeTemplate.html'
      })
      .state('movie', {
        url: '/:movieId',
        controllerAs: 'vm',
        controller: 'AppController',
        templateUrl: 'partials/show.html'
      })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  })
