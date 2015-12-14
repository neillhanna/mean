angular.module('myWebsiteControllers', [])

.controller('navCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

.controller('indexCtrl', ['$scope', '$http', 
    function ($routeParams, $scope, $http) {
        $http.get("/users").then(function(response) {
            $scope.users = response.data;
        });
}]);

.controller('meanCtrl', ['$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);


.controller('phpCtrl', ['$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);


.controller('bsCtrl', ['$scope', '$http', 
  function($routeParams, $scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
}]);

.controller('demoCtrl', ['$scope', '$http', 
  function($routeParams, $scope, $http) {
        $http.get("/users").then(function(response) {
            $scope.users = response.data;
        });
}]);