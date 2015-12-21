angular.module('userService', [])

.factory('Users', function($http){
       
     return {
         
        get : function() {
           return $http.get("/users");
        },
        create : function(scope) {
           return $http.get("/users/create/" + scope.firstname + "/" + scope.lastname + "/" + scope.email);
        },
        delete : function(id) {
            return $http.delete("/users/delete/" + id);
        }

    }
    
});