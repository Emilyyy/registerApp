'use strict';

angular.module('registerAppApp')
  .controller('HeaderCtrl', function ($scope,authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
