'use strict';

angular.module('home', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'js/src/home/home.html',
        controller: 'homeController'
    })
}])
.controller('homeController', ['$scope', function($scope) {

    // ...
    
}]);