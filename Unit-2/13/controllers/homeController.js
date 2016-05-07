angular.module('teaApp')
  .controller('HomeController', ['$scope', 'teaService', function($scope, teaService){
    this.filters = {};
    this.categories = teaService.getCategories();
    this.teas = teaService.getTeas();
  }])
