var app = angular.module('RedditClone', ['ngMessages']);

app.controller('PostsController', function($scope){
  $scope.vm = {};
  $scope.vm.posts = [{title: 'Cool Birds',
                      author: 'someguy',
                      image:'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
                      description: "A very long description about nothing.",
                      createdAt: new Date(),
                      votes: 0},
                     {title: 'Running Hampsters',
                      author: 'Hampster Man',
                      image:'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
                      description: "A very long description about nothing.",
                      createdAt: new Date(),
                      votes: 0}];

  var Post = function(title, author, image, description){
    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
    this.createdAt = new Date();
    var votes = 0;

    this.getVotes = function(){
      return votes;
    }
    this.upVote = function(){
      return votes++;
    }
    this.downVote = function(){
      return votes--;
    }
  }

  $scope.addPost = function(){
    var newPost = new Post( $scope.vm.postsForm.title,
                            $scope.vm.postsForm.author,
                            $scope.vm.postsForm.image,
                            $scope.vm.postsForm.description );
    $scope.vm.postsForm = {};
    $scope.vm.posts.push(newPost);
    $scope.addPostForm.$setPristine();
  }

  $scope.removePost = function(post){
    var index = $scope.vm.posts.indexOf(post);
    $scope.vm.posts.splice(index, 1);
  }
})
