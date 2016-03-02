'use strict';

angular.module('myApp.why', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/why', {
    templateUrl: 'why/why.html',
    controller: 'WhyCtrl'
  });
}])

.controller('WhyCtrl', function($scope) {

});