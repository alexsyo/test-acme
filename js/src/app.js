'use strict';

angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngMessages',
    'directives',
    'services',
    'home',
    'form',
    'list'
])
.config(['$locationProvider', function($locationProvider) {

    $locationProvider.hashPrefix('');

}]);
