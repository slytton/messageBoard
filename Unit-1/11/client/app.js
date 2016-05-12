(function() {
  angular.module('RedditClone', ['ui.router', 'ngAnimate', 'ngMessages', 'angularMoment'])
  .constant({'API_URL': resolveApiUrl() + '/api/v1'})
  .run(routeEvent)


  function resolveApiUrl(){
    if(window.location.origin === "http://localhost:5000") return 'http://localhost:3000';
  }


  routeEvent.$inject = ['$rootScope'];

  function routeEvent($rootScope){
    $rootScope.$on('$stateChangeStart', function(event){
      console.log(event);
      if(!localStorage.getItem('token') && event){

      }
    })
  }

})();
