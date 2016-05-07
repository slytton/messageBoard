angular.module('movieApp')
  .controller('ShowController', ['$scope', '$stateParams', 'movieService','STOCK_URL', function($scope, $stateParams, movieService, STOCK_URL){
    movieService.findSingleMovie($stateParams.movieId).then(function(movie){
      console.log(STOCK_URL);
      console.log(movie.data)
      $scope.movie = movie.data;
    });
  }])


// {
//   "Title":"Test Pilot",
//   "Year":"1938",
//   "Rated":"PASSED",
//   "Released":"22 Apr 1938",
//   "Runtime":"119 min",
//   "Genre":"Drama, Romance",
//   "Director":"Victor Fleming",
//   "Writer":"Vincent Lawrence (screen play), Waldemar Young (screen play), Frank Wead (original story)",
//   "Actors":"Clark Gable, Myrna Loy, Spencer Tracy, Lionel Barrymore",
//   "Plot":"Jim is a test pilot. His wife Ann and best friend Gunner try their best to keep him sober. But the life of a test pilot is anything but safe.",
//   "Language":"English",
//   "Country":"USA",
//   "Awards":"Nominated for 3 Oscars. Another 1 nomination.",
//   "Poster":"http://ia.media-imdb.com/images/M/MV5BODMwNzkyNDg3OV5BMl5BanBnXkFtZTgwMDU2NjQzMTE@._V1_SX300.jpg",
//   "Metascore":"N/A",
//   "imdbRating":"6.9",
//   "imdbVotes":"1,463",
//   "imdbID":"tt0030848",
//   "Type":"movie",
//   "tomatoMeter":"71",
//   "tomatoImage":"fresh",
//   "tomatoRating":"7.2",
//   "tomatoReviews":"7",
//   "tomatoFresh":"5",
//   "tomatoRotten":"2",
//   "tomatoConsensus":"N/A",
//   "tomatoUserMeter":"68",
//   "tomatoUserRating":"3.5",
//   "tomatoUserReviews":"410",
//   "tomatoURL":"http://www.rottentomatoes.com/m/1035806-test_pilot/",
//   "DVD":"11 Dec 1991",
//   "BoxOffice":"N/A",
//   "Production":"MGM",
//   "Website":"N/A",
//   "Response":"True"
// }
