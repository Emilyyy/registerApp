'use strict';

angular.module('registerAppApp')
  .controller('LogoutCtrl', function (authToken,$state) {
    authToken.removeToken();
    $state.go('main');
  });
