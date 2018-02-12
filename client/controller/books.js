var myApp=angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',function(){
console.log('BooksController loaded.....');
$scope.getBooks=function(){

  $http.get('/api/book').success(function(response){
$scope.books=response;

  });
}

}]);
