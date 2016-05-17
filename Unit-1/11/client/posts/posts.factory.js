(function() {

  angular.module('RedditClone').factory('postsService', factory);

  factory.$inject = ['$http', 'API_URL'];

  function factory($http, API_URL){
    var POSTS_API_URL = API_URL + '/posts';

    var posts = [];
    var filters = {
      sort: 'votes',
      direction: 'descending'
    }
    var postsService = {
      filters: filters,
      list: listPosts,
      create: createPost,
      removePost: removePost,
      upVote: upVote,
      downVote: downVote,
      createComment: createComment,
      removeComment: removeComment,
      unFavorite: unFavorite,
      favorite: favorite
    };

    return postsService;


    function upVote(post) {
      post.votes++;
      return updatePost(post).catch(function(err){
        post.votes--;
        return Promise.reject("Your vote could not be counted.");
      });
    }

    function downVote(post) {
      post.votes--;
      return updatePost(post).catch(function(err){
        post.votes++;
        return Promise.reject("Your vote could not be counted.");
      });
    }

    function updatePost(post) {
      return $http.post(POSTS_API_URL + '/' + post.id, post);
    }

    function listPosts(){
      return $http.get(POSTS_API_URL).then(function(response){
        posts = response.data;
        return posts;
      });
    }

    function createPost(newPost){
      return $http.post(POSTS_API_URL, newPost).then(function(response){
        if (response.data) {
          console.log(response);
          posts.push(response.data);
          console.log(posts);
          return response.data;
        } else {
          return Promise.reject('Unable to submit post.')
        }
      })
    }

    function createComment(post, comment){
      comment.post_id = post.id;
      return $http.post(POSTS_API_URL + "/" + post.id + "/comments", comment)
                  .then(function(res){

        post.comments.push(res.data);
      });
    }

    function removePost(post){
      return $http.delete(POSTS_API_URL + "/" + post.id).then(function(res){
        var index = posts.indexOf(post);
        posts.splice(index, 1);
      })
    }

    function removeComment(post, comment){
      console.log('In remove comment');
      return $http.delete(POSTS_API_URL + "/" + post.id + "/comments/" + comment.id).then(function(res){
        var index = post.comments.indexOf(comment);
        post.comments.splice(index, 1);
      })
    }

    function unFavorite(post){
      post.favorite = !post.favorite;
      return $http.post(POSTS_API_URL + "/" + post.id + "/unfavorite").catch(function(err){
        console.log(err);
        post.favorite = !post.favorite;
      });
    }

    function favorite(post){
      post.favorite = !post.favorite;
      return $http.post(POSTS_API_URL + "/" + post.id + "/favorite").catch(function(err){
        console.log(err);
        post.favorite = !post.favorite;
      });
    }
  }
})();



//
// [ { id: 0,
//             createdAt:   new Date('04/30/2016'),
//             title:       'Zany Birds',
//             author:      'someguy',
//             image:       'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
//             description: "A very long description about nothing.",
//             votes:       0,
//             comments:    [{author: 'Bob', text:"Hi, my name is Bob", createdAt: new Date('04/30/2016')},
//                           {author: 'Steve', text: "Hi Bob, my name is Steve", createdAt: new Date('04/30/2016')}]},
//           { id: 1,
//             createdAt:   new Date(),
//             title:       'Running Hampsters',
//             author:      'Hampster Man',
//             image:       'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
//             description: "A very long description about nothing.",
//             votes:       0,
//             comments:    [{author: 'Bruce', text: "I don't know what Bob and Steve are talking about.", createdAt: new Date()}]},
//           { id: 2,
//             createdAt:   new Date(),
//             title:       'Basket Man',
//             author:      'Basket Man',
//             image:       'http://im.rediff.com/news/2015/dec/24tpoty20.jpg',
//             description: "Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles Bicycles ",
//             votes:       0,
//             comments:    [{author: 'Bruce', text: "I don't know what Bob and Steve are talking about.", createdAt: new Date()}]}];
