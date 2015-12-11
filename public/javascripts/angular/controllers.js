var myWebsiteControllers = angular.module('myWebsiteControllers', []);

myWebsiteControllers.controller('navCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

myWebsiteControllers.controller('indexCtrl', ['$routeParams','$scope', '$http', 
    function ($routeParams, $scope, $http) {
        $http.get("/users").then(function(response) {
            $scope.users = response.data;
        });
}]);

myWebsiteControllers.controller('meanCtrl', ['$routeParams','$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);


myWebsiteControllers.controller('phpCtrl', ['$routeParams','$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);


myWebsiteControllers.controller('bsCtrl', ['$routeParams','$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);

myWebsiteControllers.controller('demoCtrl', ['$routeParams','$scope', '$http', 
  function($routeParams, $scope, $http) {
        $http.get("/users").then(function(response) {
            $scope.users = response.data;
        });
}]);