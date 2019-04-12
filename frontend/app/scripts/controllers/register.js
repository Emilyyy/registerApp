'use strict';
angular.module('registerAppApp')
  .controller('RegisterCtrl', function($scope, $rootScope, $http, alert) {
    $scope.submit = function(){  

      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };
      $http.post(url,user).then(function(res){
        alert('success', 'OK!', 'You are now registered');
      }, function(err){
        alert('warning','Opps!', 'Could not register');
      });
    };
  });
