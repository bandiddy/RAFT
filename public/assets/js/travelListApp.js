
var app = angular.module('tlApp', []);
app.controller('tlController', function($scope, $http) {
    $http.get("/api/user_data").then(function(response) {
        $scope.destinations = response.data;
        console.log(response.data);
    })
});