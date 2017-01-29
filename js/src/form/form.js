'use strict';

angular.module('form', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/form', {
        templateUrl: 'js/src/form/form.html',
        controller: 'formController'
    })
}])
.controller('formController', ['$scope', 'UserService', function($scope, UserService) {

    // flags
    $scope.thankYouPage = {};
    $scope.thankYouPage.flag = false;

    // vars
    $scope.user = {
        name: null,
        gender: 'male',
        email: null,
        phone: null,
        address: []
    };

    $scope.submitForm = function(user) {
        
        // format the parameters
        user.name = user.name.second + ' ' + user.name.first;

        // save the user
        UserService.subscribe(user, function() {

            $scope.thankYouPage.flag = true;
        
        });

    };
    
}]);