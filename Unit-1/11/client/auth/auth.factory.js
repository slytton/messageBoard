(function() {
  angular.module('RedditClone')
    .factory('AuthService', factory);

  factory.$inject = ['$http', 'API_URL'];

  function factory($http, API_URL){
    var AUTH_API_URL = API_URL + '/auth';
    var _user = null;

    var authFactory = {
      login: login,
      logout: logout,
      signup: signup,
      me: me,
      getUser: getUser
    };

    return authFactory;

    function signup(newUser){
      return $http.post(AUTH_API_URL + '/signup', newUser).then(function(res){
        localStorage.setItem('token', res.data.token);
      }).catch(function(err){
        return Promise.reject(err.data);
      })
    }

    function login(credentials){
      console.log(credentials);
      return $http.post(AUTH_API_URL + '/login', credentials).then(function(res){
        localStorage.setItem('token', res.data.token);
      }).catch(function(err){
        return Promise.reject(err.data);
      })
    }

    function logout(){
      localStorage.removeItem('token');
    }

    function me(){
      return $http.get(AUTH_API_URL + '/me').then(function(res){
        console.log(res);

        _user = Object.keys(res.data).length > 0 ? res.data : null;
        return _user;
      })
    }

    function getUser() {
      return _user;
    }

  }
})();
