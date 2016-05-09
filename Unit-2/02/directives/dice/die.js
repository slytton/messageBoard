angular.module('02')
  .directive('gsDie', function(){
    return {
      restrict: 'E',
      templateUrl: '/directives/dice/die.html',
      scope: {},
      link: function(scope, element){
        console.log(element.find('div'));
        scope.vm = {};
        scope.vm.numDice = 0;
        scope.vm.numDicePossible = 5;
        scope.vm.counts = {};
        scope.vm.dice = [];

        scope.$watch('vm.numDice', function(){
          if(scope.vm.dice.length < scope.vm.numDice){
            for(var i = scope.vm.dice.length; i < scope.vm.numDice; i++){
              scope.vm.dice.push({value: null})
              console.log('add ' + (scope.vm.numDice - scope.vm.dice.length) + ' dice');
            }
          }else{
            for(var i = scope.vm.dice.length; i > scope.vm.numDice; i--){
              scope.vm.dice.pop()
              console.log('subtract ' + (scope.vm.dice.length - scope.vm.numDice) + ' dice');
            }
          }
        })

        scope.addDie = function(){
          scope.vm.dice.push({value: null});
        }

        scope.roll = function(){
          scope.vm.dice.forEach(function(die){
            die.value = Math.floor(Math.random() * 6 + 1);
            if(scope.vm.counts[die.value]){
              scope.vm.counts[die.value]++;
            }else{
              scope.vm.counts[die.value] = 1;
            }
          })
        }
      }
    }
  })
