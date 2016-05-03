angular.module('RedditClone').factory('postsService', function() {

  var posts = [ { id: 0,
              createdAt:   new Date('04/30/2016'),
              title:       'Zany Birds',
              author:      'someguy',
              image:       'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
              description: "A very long description about nothing.",
              votes:       0,
              comments:    [{author: 'Bob', text:"Hi, my name is Bob", createdAt: new Date('04/30/2016')},
                            {author: 'Steve', text: "Hi Bob, my name is Steve", createdAt: new Date('04/30/2016')}]},
            { id: 1,
              createdAt:   new Date(),
              title:       'Running Hampsters',
              author:      'Hampster Man',
              image:       'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
              description: "A very long description about nothing.",
              votes:       0,
              comments:    [{author: 'Bruce', text: "I don't know what Bob and Steve are talking about.", createdAt: new Date()}]},
            { id: 2,
              createdAt:   new Date(),
              title:       'Basket Man',
              author:      'Basket Man',
              image:       'http://im.rediff.com/news/2015/dec/24tpoty20.jpg',
              description: "Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles ",
              votes:       0,
              comments:    [{author: 'Bruce', text: "I don't know what Bob and Steve are talking about.", createdAt: new Date()}]}];

  var postsService = {
    addPost: function(){
      var newPost = angular.copy($scope.vm.postsForm);
      newPost.id = $scope.vm.posts.length,
      newPost.createdAt = new Date();
      newPost.comments = [];
      newPost.votes = 0;

      $scope.vm.postsForm = {};
      $scope.vm.posts.push(newPost);
      $scope.addPostForm.$setPristine();
      $scope.vm.showAddPostForm = false;
    },

    posts: posts,

    getPost: function(postId){
      return $scope.vm.posts.filter(function(post){
        console.log(post.id);
        return post.id === postId;
      })[0];
    }

  }
  return postsService;
})
