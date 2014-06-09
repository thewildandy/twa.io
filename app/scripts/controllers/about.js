'use strict';

/**
 * @ngdoc function
 * @name twaIoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twaIoApp
 */
angular.module('twaIoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
