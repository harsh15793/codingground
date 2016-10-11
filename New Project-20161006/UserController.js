

(function(){

var app = angular.module("myapp");



var UserController = function($scope,github,$routeParams){
  
    var onUserComplete = function(data){
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos,onError);
        
    };
    
    var onRepos = function(data){
      
      $scope.repos = data;  

    };
                
 
    
    
    var onError = function(reason){
        $scope.error = "Could not fetch data";
    }
  
        
  
    
    $scope.username=$routeParams.username;
  $scope.repoSortOrder = '+name';
  github.getUser($scope.username).then(onUserComplete,onError);
    
};


app.controller("UserController",UserController);
}
());

