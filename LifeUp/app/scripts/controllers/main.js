'use strict';

/**
 * @ngdoc function
 * @name lifeUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lifeUpApp
 */
angular.module('lifeUpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
