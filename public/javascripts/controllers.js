angular.module('myWebsiteControllers', [])

.controller('navCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
})

.controller('indexCtrl', function($scope, $http) {

})

.controller('meanCtrl', function($scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
})


.controller('phpCtrl', function($scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
})


.controller('bsCtrl', function($scope, $http) {
    //$scope.phoneId = $routeParams.phoneId;
})

.controller('demoCtrl', function($scope, $http, Users) {
            //$scope.formData = {};
            Users.get()
            .success(function(data) {
                    $scope.users = data;
            });

            $scope.createUser = function() {
                    
                if (!$.isEmptyObject($scope.formData)) {
                    
                    Users.create($scope.formData)
                        
                    .success(function(data) {
                            //$scope.formData = {};
                            $scope.users = data;
                    });
                };
                
            };

            $scope.deleteUser = function(id) {
                
                Users.delete(id)
                
                .success(function(data) {
                        $scope.users = data;
             });
                
        };
});