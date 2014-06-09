'use strict';

/**
 * @ngdoc overview
 * @name twaIoApp
 * @description
 * # twaIoApp
 *
 * Main module of the application.
 */
angular
  .module('twaIoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
