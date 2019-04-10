'use strict';
angular.module('registerAppApp')
  .controller('RegisterCtrl', function($scope, $rootScope, $http, alert) {
    $scope.submit = function(){  

      var url = '/';
      var user = {};
      $http.post(url,user).then(function(res){
        alert('success', 'OK!', 'You are now registered');
      }, function(err){
        alert('warning','Opps!', 'Could not register');
      });
    };
  });
