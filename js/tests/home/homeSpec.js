describe('form', function() {

    beforeEach(module('app'));
        
    var $scope, $controller;

    beforeEach(inject(function(_$rootScope_, _$controller_) {

        $scope = _$rootScope_;
        $controller = _$controller_;

        $controller('homeController', {
            $scope: $scope
        });

    }));

    it('should be defined', function() {

        expect($controller).toBeDefined();

    });

});