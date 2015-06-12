var app = angular.module('myApp', []);

app.controller('DefaultController', function ($scope) {
    
    $scope.study = ['MBA','GATE','AIPMT','ENGG','AIEEE','IIT','NET','PUBLIC','DEFENCE','OTHER'];
    $scope.questionlist = ['CAT','XAT','GMAT','CMAT','IIFT','CET','MAT','OTHER'];
    $scope.percentlist = ['40-50','51-60','61-70','71-80','81-90','91-99'];
    $scope.graduationlist = ['ENGG','BCOM','BBA','BSC','BA','MBBS','BJMC','BCA'];
    $scope.hours= ['one','two','three','four','five','six','seven','eight'];
    
    $scope.fieldSelected = true;
    
    $scope.studyClicked = function(){
        $scope.fieldSelected = false;
        $scope.examSelected = true;
    }
    $scope.courseClicked = function(courses){
        $scope.examSelected = false;
        $scope.courseSelected = true;
        console.log(courses);
    }
    $scope.testClicked = function(test){
        console.log(test);
        $scope.courseSelected = false;
        $scope.testSelected = true;
    }
    $scope.tenthClicked = function(percent){
        $scope.testSelected = false;
        $scope.tenthSelected = true;
    }
    $scope.twelthClicked = function(){
        $scope.tenthSelected = false;
        $scope.twelthSelected = true;
    }
    $scope.graduationClicked = function(){
        $scope.twelthSelected = false;
        $scope.graduationSelected = true;
    }
});
