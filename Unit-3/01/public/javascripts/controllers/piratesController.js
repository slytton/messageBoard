angular.module('pirates')
  .controller('PiratesController', function($scope, PiratesService){
    $scope.vm = {};
    initialize();

    $scope.vm.addPirate = addPirate;

    function initialize(){
      PiratesService.all().then(function(pirates){
        $scope.vm.pirates = pirates;
      })
    }

    function addPirate(){
      PiratesService.add($scope.vm.newPirate).then(function(pirate){
        console.log('added pirate');
        $scope.vm.pirates.push(pirate)
      })
    }
  })
