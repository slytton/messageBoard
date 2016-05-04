angular.module('05')
  .controller('HttpController', ['$scope', '$http', function($scope, $http){
    $http.get('https://api.github.com/zen').then(function(data){
      $scope.view = {};
      $scope.view.itunesData = data.data;
    })
  }])
