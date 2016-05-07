angular.module('teaApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'HomeController',
        templateUrl: 'partials/homeTemplate.html'
      })
      .state('checkout', {
        url: '/checkout',
        controllerAs: 'vm',
        controller: 'CheckoutController',
        templateUrl: '/partials/checkout.html'
      })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  })
