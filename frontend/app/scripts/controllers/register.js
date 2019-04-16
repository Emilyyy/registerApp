'use strict';
angular.module('registerAppApp')
  .controller('RegisterCtrl', function($scope, $rootScope, $http, alert,authToken) {
    $scope.submit = function(){  

      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };
      $http.post(url,user).then(function(res){
       
        alert('success', 'Account Created!', 'Welcome, ' + user.email +'!');
        authToken.setToken(res.token);
      }, function(err){
        alert('warning','Opps!', 'Could not register');
      });
    };
  });
