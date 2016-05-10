angular.module('pirates').service('PiratesService', function($http){
  return {
    all: function() {
      return $http.get('/api/pirates').then(function(res){
        return res.data;
      });
    },
    add: function(pirate) {
      return $http.post('/api/pirates', pirate).then(function(res){
        console.log(res);
        return res.data;
      })
    }
  }
})
