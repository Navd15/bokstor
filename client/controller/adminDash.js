var myapp=angular.module('myApp');
myapp.controller('adminController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {
    console.log("adminController");
    $scope.listBooks=function () {
        var self=this;
        $http.get('/api/books').then((result)=>{
           var d=result;
           self.list=d.data;
console.log(d);
        })
    }


}]);