var app = angular.module('RedditClone', ['ui.router','ngAnimate', 'ngMessages', 'angularMoment']);

// angular.module('RedditClone').config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/');
//
//   $stateProvider.state('home', {
//     url: '/',
//     views: {
//       'posts': {
//         template: '<posts />'
//       }
//     }
//   })
// });

// angular.module('RedditClone').run(function($rootScope) {
//
//     $rootScope.safeApply = function(fn) {
//         var phase = $rootScope.$$phase;
//         if (phase === '$apply' || phase === '$digest') {
//             if (fn && (typeof(fn) === 'function')) {
//                 fn();
//             }
//         } else {
//             this.$apply(fn);
//         }
//     };
// });

app.controller('PostsController', function($scope, $timeout){


  $scope.vm = {};
  $scope.vm.showAddComments = false;

});

app.controller('CommentsController', function($scope){

});
