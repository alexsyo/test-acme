'use strict';

angular.module('app', [
    'ngRoute',
    'ngResource',
    'directives',
    'services',
    'home',
    'form',
    'list'
])
.config(['$locationProvider', function($locationProvider) {

    $locationProvider.hashPrefix('');

}]);
