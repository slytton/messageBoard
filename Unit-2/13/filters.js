angular.module('teaApp')
  .filter('yesNo', function(){
    return function(boolean){return boolean ? 'Yes' : 'No';}
  })
  .filter('toUSD', function(){
    return function(price){
      var price = price.toString().split("")
      price.splice(2,0,'.');
      return price.join("");
    }
  })
  .filter('byCategory', function(){
    return function(teas, category){
      teas.filter(function(tea){
        return tea.categories.includes(category)
      })
    }
  })
