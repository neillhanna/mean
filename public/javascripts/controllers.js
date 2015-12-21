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
                    //console.log($scope.users);
            });
            
            
            
            
            $scope.createUser = function() {
                
                //console.log($scope.firstname);
                
               // if (!$.isEmptyObject($scope.formData)) {
                    
                    Users.create($scope)
                        
                    .success(function(data) {
                            $scope.users.push(data) ;
                            //console.log(data);
                                       
                    });
                //};
                //event.preventDefault();
            };

            $scope.deleteUser = function(id) {
                
                Users.delete(id)
                
                .success(function(data) {
                        //$scope.users = data;
                });
                
            };
            
            
            
            console.log($scope);
            
            
});