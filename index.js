var app = angular.module('app', []);

app.controller('myCtrl', function($scope, $http) {

$http.get('topspots.json').success(function (response) {

  $scope.topspots = response;

});
});
