angular.module('teaApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'HomeController',
        templateUrl: 'partials/homeTemplate.html'
      })
      .state('cart', {
        url: '/checkout',
        controllerAs: 'vm',
        controller: 'CheckoutController',
        templateUrl: '/partials/checkout.html'
      })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  })
