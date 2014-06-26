'use strict';

/**
 * @ngdoc function
 * @name lifeUpApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the lifeUpApp
 */
angular.module('lifeUpApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
