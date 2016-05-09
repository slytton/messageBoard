var app = angular.module('RedditClone', ['ui.router','ngAnimate', 'ngMessages', 'angularMoment']);

app.controller('PostsController', function($scope, $timeout){

  $scope.vm = {};
  $scope.vm.filters = {};
  $scope.vm.filters.sort = 'votes';
  $scope.vm.filters.direction = 'descending'
  $scope.vm.showAddComments = false;

});

app.controller('CommentsController', function($scope){

});
