angular.module('05')
  .controller('RailsController', ['$scope', 'railsService', function($scope, railsService){
    $scope.vm = {};
    $scope.vm.messages = railsService.messages;
    railsService.updateMessages();
    console.log($scope.vm.messages);
  }])
