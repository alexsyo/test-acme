describe('list', function() {

    beforeEach(module('app'));
        
    var $scope, $controller, $interval, UserService;

    beforeEach(inject(function(_$rootScope_, _$controller_, _$interval_, _UserService_) {

        $scope = _$rootScope_;
        $controller = _$controller_;
        $interval = _$interval_
        UserService = _UserService_;

        $controller('listController', {
            $scope: $scope
        });

    }));

    it('should be defined', function() {

        expect($controller).toBeDefined();

    });

    it('should define the search term and the selected user', function() {

        expect($scope.terms).toBeDefined();
        expect($scope.selectedUser).toBeDefined();

    });

    it('should fetch the user as soon as it is loaded into the browser', function() {

        // Arrange
        spyOn(UserService, 'fetch');

        // Act
        $interval.flush(30000);

        // Assert
        expect(UserService.fetch).toHaveBeenCalled();

    });

    it('should be able to select a user', function() {

        // Arrange
        var user = {
            name: 'The Great Alex',
            gender: 'male',
            email: 'phalanx@greece.gov',
            phone: '00112233',
            address: [
                {number: 1, street: 'socrate', city: 'Olympia', zipcode: '0000AA'}
            ]
        }

        // Act
        $scope.selectUser(user)

        // Assert
        expect($scope.selectedUser).toEqual(user);

    });

});