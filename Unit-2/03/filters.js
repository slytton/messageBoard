angular.module('03')
  .filter('kebab', function() {
    return function(input) {
      if(typeof input === 'number') return;
      return input.replace(/_/g, '-');
    }
  })
  .filter('camel', function() {
    return function(input) {
      if(typeof input === 'number') return;
      input = input.split('-').map(function(word, index){
        if(index === 0) return word;
        return capitalize(word)
      }).join("");
      input = input.split('_').map(function(word, index){
        if(index === 0) return word;
        return capitalize(word);
      }).join("");
      return input;
    }
  })
  .filter('redact', function(){
    return function(input, toRedact){
      var regEx = new RegExp(toRedact, 'gi');
      return input.replace(regEx, 'REDACTED');
    }
  })

function capitalize(word){
  characters = word.split("")
  characters[0] = characters[0].toUpperCase();
  return characters.join("");
}
