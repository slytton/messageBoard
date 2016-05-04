angular.module('05')
  .service('railsService', ['$http', 'MY_API', function($http, MY_API){

    // this.getMessages
    //
    // this.messages;
    // this.getMessages = function(){
    //   $http.get(MY_API).then(function(data){
    //     console.log('getMessages', data.data);
    //     this.messages = data.data;
    //   })
    // };
    // var self = this;
    // this.messages = (function(){return messages || self.getMessages();})();

    var service = {
      messages: null,
      updateMessages: function(){
        $http.get(MY_API).then(function(data){
            service.messages = data.data;
        });
      }
    }

    service.updateMessages();
    console.log(service.messages);
    return service;

  }])
