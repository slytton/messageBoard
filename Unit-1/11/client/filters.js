angular.module('RedditClone')
  .filter('trim', function(){
    return function(item, length, ending){
      ending = ending || "";
      item += '';
      var newItem = item.split("").slice(0, length).join("");
      if(newItem.length < item.length) newItem += "..."
      return newItem;
    }
  })
