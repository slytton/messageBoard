angular.module('08', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/:op/:first/:second', {
        templateUrl: 'partials/home.html',
        controller: 'AppController'
      })
      .when('/:op/', {
        templateUrl: 'partials/home.html',
        controller: 'AppController'
      }).otherwise({redirectTo:'/'})

  });
