

(function(){

var app = angular.module("myapp");



var MainController = function($scope,$interval,$location){
  
   
    var decreamentCountdown = function(){
      $scope.countdown -=1;
      if($scope.countdown < 1){
          $scope.search($scope.username);
      }
        
    };
    
    var countDownInterval = null;
    
       
    var startCountdown =function(){
        
     countDownInterval =  $interval(decreamentCountdown, 1000 , $scope.countdown);  
    };
    
    $scope.search = function(username){
    
       
    if(countDownInterval){
        
        $interval.cancel(countDownInterval);
        $scope.countdown =null;
    }
       $location.path("/user/" + username);
    };
    
    $scope.username="angular";
  $scope.countdown = 5;
  startCountdown();
    
};


app.controller("MainController",MainController);
}
());

