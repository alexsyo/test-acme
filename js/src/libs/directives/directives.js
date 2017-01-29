'use strict';

angular.module('directives', [])
.directive('navigation', function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/src/libs/directives/navigation.html'
    }
})
.directive('userModal', ['UserService', function(UserService) {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        templateUrl: 'js/src/libs/directives/userModal.html'
    }
}])
.directive('search', function() {
    return {
        restrict: 'E',
        scope: {
            terms: '='
        },
        templateUrl: 'js/src/libs/directives/search.html'
    }
})
.directive('footer', function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/src/libs/directives/footer.html'
    }
})
.directive('zipcode', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {

            ctrl.$validators.zipcode = function(modelValue) {

                return /[0-9]{4}[a-zA-z]{2}/.test(modelValue);

            }

        }
    }
});