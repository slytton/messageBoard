angular.module('teaApp')
  .filter('yesNo', function(){
    return function(boolean){return boolean ? 'Yes' : 'No';}
  })
  .filter('toUSD', function(){
    return function(price){
      var price = (price/100)
      return price;
    }
  })
  .filter('byCategory', function(){
    return function(teas, category){
      if(!category) return teas;
      return teas.filter(function(tea){
        return tea.categories.includes(category);
      })
    }
  })
  .filter('range', function(){
    return function(teas, start, end){
      var array = [];
      for (var i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
    }
  })
