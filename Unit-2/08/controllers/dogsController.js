angular.module('08')
  .controller('DogsController', ['$scope', function($scope){
    $scope.view = {};
    $scope.view.message = "Woof Woof!"
  }])
