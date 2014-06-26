'use strict';

/**
 * @ngdoc function
 * @name lifeUpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lifeUpApp
 */
angular.module('lifeUpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
      var c=0;
var minutes= 0;
var t;
var timer_is_on=0;

function timedCount()
{
document.getElementById('txt').value='minutes:'+ minutes + ' seconds: '+ c;
c=c+1;
if (c%60==0){
minutes+=1;
c=0;
}
t=setTimeout("timedCount()",1000);
}

function doTimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();
  }
}
    ];
  });
