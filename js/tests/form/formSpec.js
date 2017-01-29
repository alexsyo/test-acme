describe('form', function() {

    beforeEach(module('app'));
        
    var $scope, $controller, UserService;

    beforeEach(inject(function(_$rootScope_, _$controller_, _UserService_) {

        $scope = _$rootScope_;
        $controller = _$controller_;
        UserService = _UserService_;

        $controller('formController', {
            $scope: $scope
        });

    }));

    it('should be defined', function() {

        expect($controller).toBeDefined();

    });

    it('should set the flags and a container object for the user form', function() {

        expect($scope.user.name).toBeDefined();
        expect($scope.user.gender).toBeDefined();
        expect($scope.user.email).toBeDefined();
        expect($scope.user.phone).toBeDefined();
        expect($scope.user.address).toBeDefined();
        expect($scope.thankYouPage.flag).toBe(false);

    });

    it('should format the body of the query and submit the form', function() {

        // Arrange
        var user = {
            name: { first: 'Alex', second: 'The Great' },
            gender: 'male',
            email: 'phalanx@greece.gov',
            phone: '00112233',
            address: [
                {number: 1, street: 'socrate', city: 'Olympia', zipcode: '0000AA'}
            ]
        }

        var requestBody = {
            name: 'The Great Alex',
            gender: 'male',
            email: 'phalanx@greece.gov',
            phone: '00112233',
            address: [
                {number: 1, street: 'socrate', city: 'Olympia', zipcode: '0000AA'}
            ]
        }

        spyOn(UserService, 'subscribe');

        // Act
        $scope.submitForm(user);

        // Assert
        expect(UserService.subscribe).toHaveBeenCalled();

    });

});