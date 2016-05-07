angular.module('movieApp')
  .directive('gsMovies', ['$scope', '$stateParams', 'movieService', function($scope, $stateParams, movieService){
    return {
      restrict: 'E',
      templateUrl: '/directives/movies/movies.html',
      scope: {},
      link: function(scope, element){
          movieService.findMovies($stateParams.movieName).then(function(movies){
            console.log(movies);
            $scope.movies = movies;
          });
      }
    }
  }])
