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



  var addComment = function(postId, subScope){
    var post = $scope.vm.posts.filter(function(post){
      console.log(post.id);
      return post.id === postId;
    })[0];

    var copiedComment = angular.copy(subScope.commentsForm);
    Object.keys(subScope.commentsForm).map(function(key){
      return delete subScope.commentsForm[key];
    })

    copiedComment.createdAt = new Date();

    post.comments.push(copiedComment);

    subScope.addCommentForm.$setPristine();
    subScope.showComments = true;
  }
});

app.controller('CommentsController', function($scope){

});
