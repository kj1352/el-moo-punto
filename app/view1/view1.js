angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/stories', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http',function($scope, $http) {


  $http({
        method : "GET",
        url : "http://bane-was-bored.herokuapp.com/posts/"
    }).then(function mySucces(response) {
        console.log(response.data);
        $scope.results=response.data;
      }, function myError(response) {
        console.log(response);
    });

}]);
