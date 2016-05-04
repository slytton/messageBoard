angular.module('02')
  .directive('gsTodo', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/todo/todo.html',
      scope: {
        todo: '=',
        removeTodo: '&'
      },
      link: function(scope, element){
      }
    }
  });
