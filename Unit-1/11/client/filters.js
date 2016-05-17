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
  .filter('favorites', function(){
    return function(items, filterByFav){
      if(filterByFav){
        return items.filter(function(item){
          return !!item.favorite;
        })
      }else{
        return items
      }
    }
  })
