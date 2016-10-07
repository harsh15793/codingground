

(function(){

var app = angular.module("myapp" , []);



var MainController = function($scope,$http){
  
    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onRepos,onError);
        
    };
    
    var onRepos = function(response){
      
      $scope.repos = response.data;  
    };
    
    var decreamentCountdown = function(){
      $scope.countdown -=1;
      if($scope.countdown < 1){
          $scope.search($scope.user);
      }
        
    };
    
    
    var onError = function(reason){
        $scope.error = "Could not fetch data";
    }
    
    $scope.search = function(username){
    
    $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete,onError);
    };
    
    $scope.username="angular";
  $scope.message = "Hello";  
  $scope.repoSortOrder = '+name';
  $scope.countdown = 5;
 
    
};


app.controller("MainController",MainController);
}
());