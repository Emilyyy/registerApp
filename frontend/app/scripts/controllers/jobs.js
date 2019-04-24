'use strict';

angular.module('registerAppApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'jobs').then(function(){
      $scope.jobs = jobs;
    },function(err){
      alert('warning', "Unable to get jobs", err.message);
    })
  });

  var jobs = [
    'Cook',
    'SuperHero',
    'Unicorn Wisperer', 
    'Toast Inspector'
];

  



