(function() {
  angular.module('RedditClone', ['ui.router','ngAnimate', 'ngMessages', 'angularMoment'])
  .constant({'API_URL': resolveApiUrl() + '/api/v1'});


  function resolveApiUrl(){
    if(window.location.origin === "http://localhost:5000") return 'http://localhost:3000';
  }
})();


angular.module('RedditClone').controller('PostsController', function($scope, $timeout){

  $scope.vm = {};
  $scope.vm.filters = {};
  $scope.vm.filters.sort = 'votes';
  $scope.vm.filters.direction = 'descending'
  $scope.vm.showAddComments = false;

});

angular.module('RedditClone').controller('CommentsController', function($scope){

});
