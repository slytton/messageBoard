angular.module('movieApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'HomeController',
        templateUrl: 'partials/homeTemplate.html'
      })
      .state('results', {
        url: '/movie/:movieName?mediaType',
        controllerAs: 'vm',
        controller: 'MoviesController',
        templateUrl: 'partials/movieTemplate.html'
      })
      .state('movie', {
        url: '/show/:movieId/',
        controllerAs: 'vm',
        controller: 'ShowController',
        templateUrl: 'partials/show.html'
      })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  })
