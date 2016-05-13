angular.module('RedditClone')
  .factory('AuthInterceptorService', factory)

factory.$inject = [];

function factory(){
  return {
   'request': function(req) {
      var token = localStorage.getItem('token');
      if (token) req.headers.authentication = token;
      return req;
    },

    'response': function(response) {

      return response;
    }
  };
}
