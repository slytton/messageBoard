angular.module('04')
  .service('todoService', function(){
    var todos = [];
    function todoIndex(todoId){
      for(var i = 0; i < todos.length; i++){
        var todo = todos[i];
        if ( todo.id === todoId ){
          return i;
        }
      }
    }
    return {
      todos: todos,
      removeTodo: function(todoId){
        // console.log('in remove todo. todoId:', todoId);
        todos.splice(todoIndex(todoId), 1);
      },
      addTodo: function(todo){
        console.log('in addTodo');
        todo.id = todos.length + 1;
        todo.date = Date();
        todos.push(todo);
      },
      updateTodo: function(todoId, todo){
        console.log('in updateTodo', todo);
        todo = angular.copy(todo);
        todos.splice(todoIndex(todoId), 1, todo)
      }
    }

  })
