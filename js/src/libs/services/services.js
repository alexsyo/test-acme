angular.module('services', [])

// Make RESTful calls
.factory('APIService',['$resource', function($resource) {

    return $resource('/api/:service/:id', {}, {});

}])

// Store a list of User 
.factory('UserService', ['APIService', function(APIService) {

    var UserService = {}

    // Initialize the object with mock data
    UserService.users = [
        { "name": "Buckley Patrick", "gender": "male", "email": "buckleypatrick@golistic.com", "phone": "0634 796837", "address": [{ "number": 7, "street": "Adamsdreef", "city": "Rhenen", "zipcode": "6716ME" }]},
        { "name": 'Rossi Mario', "gender": "male", "email": "mario.rossi@tiscali.it", "phone": "0347 000000", "address": [{ "number": 2, "street": "somwhere..", "city": "Vianen", "zipcode": "0000AB" }]},
        { "name": 'Smith Abigail', "gender": "female", "email": "abby_smith@gmail.co.uk", "phone": "010 000000", "address": [{ "number": 5, "street": "somwhere..", "city": "Rotterdam", "zipcode": "0000AC" }]}
    ];

    // Fetch the list of users using an http request
    UserService.fetch = function() {

        APIService.query({service: 'subscriptions'}, function(data) {

            UserService.users = data;

        }, function(err) {
            // here left empty because successful responses can not happen.
            // In a real world app this function will be used
            // to handle error responses
        });

    }

    // Subscribe a new user to the database
    UserService.subscribe = function(user, callback) {

        // Create a new request
        var api = new APIService();

        // Define the body of the request
        for(var prop in user) {
            if(user.hasOwnProperty(prop)) {
                api[prop] = user[prop];
            }
        }

        // Post the request
        api.$save({service: 'subscriptions'})
        .then(function(data) {
            // In a real world app the function used for the error response
            // should be used for a success response instead and
            // be replaced by an error handling system
        })
        .catch(function(err) {
            // Creating a new user with the parameter passed
            // to mock the api call 
            UserService.users.push(user);
            callback();
        });

    }

    return UserService;

}]);