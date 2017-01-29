'use strict';

angular.module('list', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'js/src/list/list.html',
        controller: 'listController'
    })
}])
.controller('listController', ['$scope', '$interval', '$rootScope', 'UserService', function($scope, $interval, $rootScope, UserService) {

    $scope.terms = '';
    $scope.selectedUser = null;
    $scope.users = UserService.users;

    // Initialize the user array
    UserService.fetch();

    // Update the users list periodically
    var update = $interval(function() {

        UserService.fetch();

    }, 30000);

    // Stop the update when changing route
    $rootScope.$on('$locationChangeSuccess', function() {

        $interval.cancel(update);

    });

    $scope.selectUser = function(user) {

        $scope.selectedUser = user;

    };
    
}]);