angular.module('04')
  .controller('SingleController', function($scope){
    $scope.singleton = (function(){
      var instance;
      console.log("in Singleton");
      function init(){
        return instance = { people: [] }
      }

      if(instance) return instance;
      console.log('returning init');
      console.log('init', init());
      return init();
    })();

    console.log($scope.singleton);
  })
