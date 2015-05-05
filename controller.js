var app = angular.module('myApp', []);

app.controller('DefaultController', function ($scope) {
    $scope.name = 'Geek';
    
    $scope.searchCalled = function(){
         $scope.searchActive = true;
    }
    $scope.searchDeactive = function(){
         $scope.searchActive = false;   
    }
});
