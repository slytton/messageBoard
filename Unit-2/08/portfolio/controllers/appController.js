angular.module('08')
  .controller('appController', ['$scope', '$location', function($scope, $location){
    $scope.$on('$routeChangeSuccess', function(){
      $scope.path = $location.$$path;
      console.log($scope.path);
    });
  }])
