angular.module('05')
  .controller('RailsController', ['$scope', 'railsService', function($scope, railsService){
    $scope.vm = {};

    var getMessage = function(){
      railsService.getMessages().then(function(messages){
        $scope.vm.messages = messages;
      });
    }
    $timeout(function(){
      getMessage();
    }, 2500)

    $scope.sendMessage = function (message) {
      railsService.sendMessage(message).then(function(){
        $scope.vm.messages.push(message)
      })
    };

  }])
