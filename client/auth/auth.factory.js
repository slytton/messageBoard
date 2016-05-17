(function() {
  angular.module('RedditClone')
    .factory('AuthService', factory);

  factory.$inject = ['$http', 'API_URL'];

  function factory($http, API_URL){
    var AUTH_API_URL = API_URL + '/auth';
    var _user = null;

    var authFactory = {
      session: { currentUser: null },
      login: login,
      logout: logout,
      signup: signup,
      me: me,
      //getUser: getUser
    };

    return authFactory;

    function signup(newUser){
      return $http.post(AUTH_API_URL + '/signup', newUser).then(function(res){
        localStorage.setItem('token', res.data.token);
        authFactory.me();
      }).catch(function(err){
        return Promise.reject(err.data);
      })
    }

    function login(credentials){
      return $http.post(AUTH_API_URL + '/login', credentials).then(function(res){
        localStorage.setItem('token', res.data.token);
        authFactory.me();
      }).catch(function(err){
        return Promise.reject(err.data);
      })
    }

    function logout(){
      localStorage.removeItem('token');
      authFactory.session.currentUser = null;
    }

    function me(){
      return $http.get(AUTH_API_URL + '/me').then(function(res){
        authFactory.session.currentUser = Object.keys(res.data).length > 0 ? res.data : null;
        console.log('AuthFactory me()' + authFactory.session);
        return authFactory.session;
      })
    }

    // function getUser() {
    //   return authFactory.session.currentUser;
    // }

  }
})();
