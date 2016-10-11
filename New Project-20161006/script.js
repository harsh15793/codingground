

(function(){

var app = angular.module("myapp" , []);



var MainController = function($scope,github,$interval,$log,$anchorScroll,$location){
  
    var onUserComplete = function(data){
        $scope.user = data;
        github.getRepos($scope.user).then(onRepos,onError);
        
    };
    
    var onRepos = function(data){
      
      $scope.repos = data;  
      $location.hash("userDetail");
      $anchorScroll();
    };
    
    var decreamentCountdown = function(){
      $scope.countdown -=1;
      if($scope.countdown < 1){
          $scope.search($scope.username);
      }
        
    };
    
    
    var onError = function(reason){
        $scope.error = "Could not fetch data";
    }
  
    var countDownInterval = null;
    
       
    var startCountdown =function(){
        
     countDownInterval =  $interval(decreamentCountdown, 1000 , $scope.countdown);  
    };
    
    $scope.search = function(username){
    
    $log.info("Searching for " + username);
    github.getUser(username).then(onUserComplete,onError);
        
    if(countDownInterval){
        
        $interval.cancel(countDownInterval);
        $scope.countdown =null;
    }
        
    };
    
    $scope.username="angular";
  $scope.message = "Hello";  
  $scope.repoSortOrder = '+name';
  $scope.countdown = 5;
  startCountdown();
    
};


app.controller("MainController",MainController);
}
());

