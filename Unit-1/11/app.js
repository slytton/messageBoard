var app = angular.module('RedditClone', ['ngMessages', 'angularMoment', 'ngAnimate']);

app.controller('PostsController', function($scope){

  function Comment(author, text){
    this.author = author;
    this.text = text;
    this.createdAt = new Date();
  }

  function Post(id, title, author, image, description, comments){
    this.getVotes = function(){
      return this.votes;
    }
    this.upVote = function(){
      this.votes++;
    }
    this.downVote = function(){
      this.votes--;
    }

    this.addComment = function(comment){
      this.comments.push(comment);
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
    this.createdAt = new Date();
    this.comments = comments || [];
    this.votes = 0;
  }
  $scope.vm = {};
  $scope.vm.showAddComments = false;
  $scope.vm.posts = [ new Post(0,
                               'Zany Birds',
                               'someguy',
                               'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
                               "A very long description about nothing.",
                               [new Comment('Bob', "Hi, my name is Bob"),
                                new Comment('Steve', "Hi Bob, my name is Steve")]),
                      new Post(1,
                               'Running Hampsters',
                               'Hampster Man',
                               'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
                               "A very long description about nothing.",
                               [new Comment('Bruce', "I don't know what Bob and Steve are talking about.")])];


  $scope.addPost = function(){
    var newPost = new Post( $scope.vm.posts.length,
                            $scope.vm.postsForm.title,
                            $scope.vm.postsForm.author,
                            $scope.vm.postsForm.image,
                            $scope.vm.postsForm.description);
    $scope.vm.postsForm = {};
    $scope.vm.posts.push(newPost);
    $scope.addPostForm.$setPristine();
    $scope.vm.showAddPostForm = false;
  }

  $scope.removePost = function(post){
    var index = $scope.vm.posts.indexOf(post);
    $scope.vm.posts.splice(index, 1);
  }

  $scope.addComment = function(postId, subScope){
    var post = $scope.vm.posts.filter(function(post){
      console.log(post.id);
      return post.id === postId;
    })[0];

    var copiedComment = angular.copy(subScope.commentsForm);
    Object.keys(subScope.commentsForm).map(function(key){
      return delete subScope.commentsForm[key];
    })

    post.comments.push(new Comment(copiedComment.author,
                                   copiedComment.comment));

    subScope.addCommentForm.$setPristine();
    subScope.showComments = true;
  }
});

app.controller('CommentsController', function($scope){

});
