'use strict';

angular.module('registerAppApp').config(function($urlRouterProvider, $stateProvider, $httpProvider){

    $urlRouterProvider.otherwise('/');
    
    $stateProvider

    .state('main',{
        url: '/',
        templateUrl: '/views/main.html'
    })

    .state('register',{
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    })

    .state('login',{
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
    })
    
    .state('logout',{
        url: '/logout',
        controller: 'LogoutCtrl'
    })
    
    .state('jobs',{
        url: '/job',
        templateUrl: '/views/jobs.html',
        controller: 'JobsCtrl'
    });
    
    // var ModuleConfig = function  ($httpProvider) {
    //     $httpProvider.intercepters.push('authInterceptor');
    // };

    $httpProvider.interceptors.push('authInterceptor');



})


.constant('API_URL', 'http://localhost:3000/');