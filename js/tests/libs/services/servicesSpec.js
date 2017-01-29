describe('services', function() {

    beforeEach(module('app'));
        
    var $httpBackend, $interval, APIService, UserService;

    beforeEach(inject(function(_$httpBackend_, _APIService_, _UserService_) {

        $httpBackend = _$httpBackend_;
        UserService = _UserService_;
        APIService = _APIService_;

    }));

    describe('APIService', function() {

        it('should make restful requests to the api end-point', function() {

            // Arrange / Assert
            $httpBackend.expectGET('/api/blah').respond();
            $httpBackend.expectGET('/api/blah/45').respond();
            $httpBackend.expectPOST('/api/blah').respond();
            $httpBackend.expectDELETE('/api/blah/45').respond();

            // Act - GET
            APIService.query({service: 'blah'});

            // Act - GET + query params
            APIService.get({service: 'blah', id: 45});

            // Act - POST
            var postRequest = new APIService();
            postRequest.test = 'something';
            postRequest.$save({service: 'blah'});

            // Act - DELETE
            APIService.remove({service: 'blah', id: 45})


            $httpBackend.flush();

        });

    });

    describe('UserService', function() {

        it('should fetch users from the api and store them in a variable', function() {

            // Arrange / Assert
            var users = [
                {name: 'Hercules'},
                {name: 'Megara'}
            ];
            $httpBackend.expectGET('/api/subscriptions').respond(users);

            // Act
            UserService.fetch();

            $httpBackend.flush();

        });

        it('should subscribe a new user', function() {

            // Arrange
            $httpBackend.expectPOST('/api/subscriptions').respond(500, '');
 
            // Act
            UserService.subscribe({name: 'Talos'}, function() {});

            $httpBackend.flush();

            // Assert
            // This needs to be changed in a real App
            expect(UserService.users[3].name).toEqual('Talos');

        });

    });

});