'use strict';

/**
 * @ngdoc function
 * @name registerAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the registerAppApp
 */
angular.module('registerAppApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function(){
      console.log("test");
    }
  });
