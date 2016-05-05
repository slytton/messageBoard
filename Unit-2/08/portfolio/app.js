angular.module('08', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .otherwise({redirectTo: '/projects'})
  });
