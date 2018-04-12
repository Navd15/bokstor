var myApp=angular.module('myApp');
myApp.controller('BooksController',['$scope','$http','$location','$routeParams' ,function($scope,$http,$location,$routeParams){
    $scope.getBook=function(){
        var id=$routeParams.id;
        console.log(id);
        $http.get('/api/books/'+id).then(function(response) {
            $scope.bd=response.data;
        })
    }

    $scope.getBooks=function(){
  $http.get('/api/books').then(function (response){
var d=$scope.bookan=response.data;
  },function(error){

    console.log(error);
  })
}

    $scope.addBook=function(){
        $http.post('/api/books',$scope.book).then(function (response){
            alert("Book added,_id:"+this.book._id);
        },function(error){

            console.log(error);
        })
    }

}]);
