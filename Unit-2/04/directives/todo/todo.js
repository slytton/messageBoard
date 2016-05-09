angular.module('04')
  .directive('gsTodo', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/todo/todo.html',
      scope: {
        todo: '=',
        removeTodo: '&',
        updateTodo: '&'
      },
      link: function(scope, element){
        scope.update = function(todoId, todo){
          scope.updateTodo({todoId: todoId, todo: todo});
          scope.vm.showEdit = false;
        }
      }
    }
  });
