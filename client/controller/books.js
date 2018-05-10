var myApp=angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams' ,function($scope,$http,$location,$routeParams){

  $scope.filter=function(){
      if(($scope.search==undefined||$scope.search=="")||$scope.category==undefined){
      //do nothing
          return "";
      }
      else{
      var attrib = $scope.category + ':' + $scope.search;

      $http.get('/api/books_filter/' + attrib).then(function (response) {
          if(response==[]){


          }
          $scope.bookan=response.data;
          $scope.Heading='Books by '+$scope.category;
      }, function (err) {
          console.log(err);
      })

  }}

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


    //helper functions




}]);








