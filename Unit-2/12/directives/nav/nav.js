angular.module('movieApp')
  .directive('gsNav', ['$state', '$stateParams', function($state, $stateParams){
    return {
      restrict: 'E',
      templateUrl: '/directives/nav/nav.html',
      scope: {},
      link: function(scope, element){
        scope.movieForm = {};
        console.log($stateParams);
        scope.$on('$stateChangeSuccess', function(){
          scope.movieForm.searchTerm = $stateParams.movieName || "";
          scope.movieForm.mediaType = $stateParams.movieType || 'all';
        })
        scope.search = function(){
          $state.go('results', { movieName: scope.movieForm.searchTerm,
                                 mediaType: scope.movieForm.mediaType })
        }
      }
    }
  }]);
