angular.module('05')
  .controller('ItunesController', ['$scope', '$http', function($scope, $http){
    $http.get('https://itunes.sdafsd.com/search?term=jack+johnson').then(function(data){
      $scope.view = {};
      $scope.view.zenData = data.data;
    }).catch(function(err){
      console.log(err);
    })
  }])
