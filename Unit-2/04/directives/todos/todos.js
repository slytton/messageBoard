angular.module('04')
  .directive('gsTodos', ['todoService', function(todoService){
    return {
      restrict: 'E',
      templateUrl: '/directives/todos/todos.html',
      scope: {},
      link: function(scope, element){
        scope.vm = {};
        scope.vm.todos = [];
        scope.todoService = todoService;
      }
    }
  }]);
