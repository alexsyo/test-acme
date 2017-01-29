describe('directive', function() {

    beforeEach(module('app', 'test.templates'));
        
    var $compile, $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;

    }));

    describe('navigation', function() {

        beforeEach(function() {
                
            $scope = $rootScope.$new();

        });

        it('should display the nav bar', function() {

            // Arrange
            var element = $compile("<navigation></navigation>")($scope);

            // Act
            $scope.$digest();

            // Assert
            expect(element.html()).toContain('<nav class="navbar navbar-default navbar-static-top navbar-main">');

        });

    });

    describe('userModal', function() {

        beforeEach(function() {
                
            $scope = $rootScope.$new();

        });

        it('should display the user properties', function() {

            // Arrange
            $scope.selectedUser = {
                name: 'The Great Alex',
                gender: 'male',
                email: 'phalanx@greece.gov',
                phone: '00112233',
                address: [
                    {number: 1, street: 'socrate', city: 'Olympia', zipcode: '0000AA'}
                ]
            }

            var element = $compile('<user-modal user="selectedUser"></user-modal>')($scope);

            // Act
            $scope.$digest();

            // Assert
            expect(element.html()).toContain('The Great Alex');
            expect(element.html()).toContain('0000AA');

        });

    });

    describe('search', function() {

        beforeEach(function() {
                
            $scope = $rootScope.$new();

        });

        it('should display the search bar', function() {

            // Arrange
            $scope.terms = '';
            var element = $compile('<search terms="terms"></search>')($scope);

            // Act
            $scope.$digest();

            // Assert
            expect(element.html()).toContain('<div class="search">');

        });

    });

    describe('footer', function() {

        beforeEach(function() {
                
            $scope = $rootScope.$new();

        });

        it('should display the footer', function() {

            // Arrange
            var element = $compile("<footer></footer>")($scope);

            // Act
            $scope.$digest();

            // Assert
            expect(element.html()).toContain('Acme');

        });

    });

    describe('zipcode', function() {

        beforeEach(function() {
            
            $scope = $rootScope.$new();

        });

        it('should accept a valid zip code', function() {

            // Arrange
            $scope.test = '0000AA';
            var element = $compile(
                '<form name="form">' +
                  '<input name="test" ng-model="test" zipcode>' +
                '</form>'
            )($scope);

            // Act
            $scope.$digest();

            // Assert
            expect($scope.form.$valid).toBe(true);

        });

        it('should not accept an invalid zip code', function() {

            // Arrange
            $scope.test = '000AAA';
            var element = $compile(
                '<form name="form">' +
                  '<input name="test" ng-model="test" zipcode>' +
                '</form>'
            )($scope);

            // Act
            $scope.$digest();

            // Assert
            expect($scope.form.$valid).toBe(false);

        });

    });

});