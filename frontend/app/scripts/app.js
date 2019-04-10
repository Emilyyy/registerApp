'use strict';

angular
  .module('registerAppApp', ['ui.router'])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
