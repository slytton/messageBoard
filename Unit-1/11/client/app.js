(function() {
  angular.module('RedditClone', ['ui.router', 'ngAnimate', 'ngMessages', 'angularMoment'])
  .constant({'API_URL': resolveApiUrl() + '/api/v1'})
  .run(routeEvent)


  function resolveApiUrl(){
    if(window.location.origin === "http://localhost:5000") return 'http://localhost:3000';
  }


  routeEvent.$inject = ['$rootScope', '$state'];

  function routeEvent($rootScope, $state){
    $rootScope.$on('$stateChangeStart', function(event, state){
      console.log(state);
      if(!localStorage.getItem('token') && state.isProtected){
        console.log('preventingDefault');
        event.preventDefault();
        $state.go('login');
      }
    })
  }

})();