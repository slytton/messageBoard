angular.module('04')
  .controller('CalcController', function($scope){
    $scope.vm = {};
    $scope.calculate = function(){
      console.log('in calculate');
      switch ($scope.vm.op) {
        case 'divide':
          $scope.vm.total = $scope.vm.first / $scope.vm.second;
          break;
        case 'multiply':
          $scope.vm.total = $scope.vm.first * $scope.vm.second;
          break;
        case 'add':
          $scope.vm.total = $scope.vm.first + $scope.vm.second;
          break;
        case 'subtract':
          $scope.vm.total = $scope.vm.first - $scope.vm.second;
          break;
        default:
          console.log('in default');
      }
      console.log($scope.vm);
    }
  })
