angular.module('userService', [])

.factory('Users', function($http){
       
     return {
         
        get : function() {
           return $http.get("/users");
        },
        create : function(userData) {
           return $http.post("/users", userData);  
        },
        delete : function(id) {
            return $http.delete("/users/" + id);
        }

    }
    
});