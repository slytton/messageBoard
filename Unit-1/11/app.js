var app = angular.module('RedditClone', ['ngMessages']);

app.controller('PostsController', function($scope){

  function Comment(author, text){
    this.author = author;
    this.text = text;
    this.createdAt = Date.now();
  }

  function Post(title, author, image, description, comments){
    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
    this.createdAt = Date.now();
    this.comments = comments || [];
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


  $scope.vm = {};
  $scope.vm.posts = [ new Post('Cool Birds',
                               'someguy',
                               'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
                               "A very long description about nothing.",
                               [new Comment('Bob', "Hi, my name is Bob"),
                                new Comment('Steve, "Hi Bob, my name is Steve"')]),
                      new Post('Running Hampsters',
                               'Hampster Man',
                               'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
                               "A very long description about nothing.",
                               [new Comment('Bruce', "I don't know what Bob and Steve are talking about.")])];



  $scope.addPost = function(){
    var newPost = new Post( $scope.vm.postsForm.title,
                            $scope.vm.postsForm.author,
                            $scope.vm.postsForm.image,
                            $scope.vm.postsForm.description);
    $scope.vm.postsForm = {};
    $scope.vm.posts.push(newPost);
    $scope.addPostForm.$setPristine();
  }

  $scope.removePost = function(post){
    var index = $scope.vm.posts.indexOf(post);
    $scope.vm.posts.splice(index, 1);
  }
})
