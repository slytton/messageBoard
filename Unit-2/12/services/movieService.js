angular.module('movieApp')
  .service('movieService', ['$http', '$q', 'STOCK_URL', function($http, $q, STOCK_URL){
    var OMDB_API = "http://www.omdbapi.com/?"
    var movieCache = {};
    return {
      findMovies: function(searchTerm, mediaType){
        var page = page || 1;

        console.log('finding movie ', searchTerm);
        return $q(function(resolve, reject){
          if(movieCache[searchTerm] &&
             movieCache[searchTerm].type === mediaType){
            resolve(movieCache[searchTerm].results);
            console.log('from cache');
          }else{
            type = (mediaType === 'all') ? "" : '&type=' + mediaType;
            console.log('at: ' + OMDB_API + 's=' + searchTerm + type);
            $http.get(OMDB_API + 's=' + searchTerm + type).then(function(results){
              if(results.data.Response === "False") return reject('nothing found');
              results.data.Search.map(function(movie){
                if(movie.Poster === 'N/A') movie.Poster = STOCK_URL;
              })
              movieCache[searchTerm] = { results: results.data.Search,
                                         type: (mediaType || 'all')};
              resolve(movieCache[searchTerm].results);
            }).catch(function(err){
              reject(err)
            })
          }
        })
      },

      findSingleMovie: function(id){
        return $http.get(OMDB_API + 'tomatoes=true&i=' + id).then(function(movie){
          if(movie.data.Poster === 'N/A') movie.data.Poster = STOCK_URL;
          return movie;
        })
      }
    }
  }])
