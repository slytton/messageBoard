angular.module('movieApp')
  .controller('MoviesController', ['$scope', '$stateParams', 'movieService', function($scope, $stateParams, movieService){
    movieService.findMovies($stateParams.movieName,
                            $stateParams.mediaType).then(function(movies){
      $scope.movies = movies;
    })
  }])
