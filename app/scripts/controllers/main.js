'use strict';

/**
 * @ngdoc function
 * @name twaIoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twaIoApp
 */
angular.module('twaIoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
