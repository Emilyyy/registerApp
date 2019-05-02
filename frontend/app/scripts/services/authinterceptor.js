'use strict';

angular.module('registerAppApp').factory('authInterceptor', function(authToken) {
   
    return {
      request: function(config){
        var token = authToken.getToken();
        console.log('authinterceptor', token);
        if(token)
          config.headers.Authorization = 'Bearer ' + token;

          return config;
      },
      response: function(response){
          return response;
      }
    };
  });
