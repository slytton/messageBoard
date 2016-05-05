'use strict';
angular.module('05')
  .service('railsService', ['$http', '$q', 'MY_API', function($http, $q, MY_API){
    var messageCache = {
      messages: null,
      fetched: new Date()
    };

    var service = {
      getMessages: function(o){
        return $q(function(resolve, reject){
          var mc = messageCache.fetched-0;
          if(messageCache.messages || (new Date() - mc > 2000) ){
            resolve(messageCache.messages);
          } else {
            $http.get(MY_API).then(function(res){
              messageCache.messages = res.data;
              messageCache.fetched = new Date();
              resolve(messageCache.messages);
            }).catch(function(error){
              reject(error);
            });
          }
        })
      },
      sendMessage: (message) => {
        console.log('in send');
        message = angular.toJson(message);
        return $http.post( MY_API, message )
        .catch(function(err){
          console.log(err);
        })
      }
    }
    return service;

  }])
