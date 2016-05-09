angular.module('08')
  .controller('AppController', ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams){
    $scope.vm = {};
    $scope.vm.total = 0;

    $scope.$on('$routeChangeSuccess', function(){
      var first = Number($route.current.params.first);
      var second = Number($route.current.params.second);

      switch ($route.current.params.op) {
        case 'divide':
          $scope.vm.total = first / second;
          break;
        case 'multiply':
          $scope.vm.total = first * second;
          break;
        case 'add':
          $scope.vm.total = first + second;
          break;
        case 'subtract':
          $scope.vm.total = first - second;
          break;
        default:
          console.log('in default');
      }
    })

  }])
