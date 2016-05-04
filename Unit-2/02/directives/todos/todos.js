angular.module('02')
  .directive('gsTodos', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/todos/todos.html',
      scope: {},
      link: function(scope, element){
        scope.vm = {};
        scope.vm.todos = [];

        scope.removeTodo = function(todoId){
          // console.log('in remove todo. todoId:', todoId);
          for(var i = 0; i < scope.vm.todos.length; i++){
            var todo = scope.vm.todos[i];
            if ( todo.id === todoId ){
              scope.vm.todos.splice(i, 1);
            }
          }
        };

        scope.addTodo = function(){
          // console.log('in addTodo');
          todo = angular.copy(scope.vm.newTodo);
          todo.id = scope.vm.todos.length + 1;
          todo.date = Date();
          scope.vm.todos.push(todo);
          // console.log(scope);
        };
      }
    }
  });
