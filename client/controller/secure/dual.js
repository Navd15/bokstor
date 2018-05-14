var app = angular.module('myApp');


app.controller('login', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {

var user=$scope.user={};
console.log($('#eid'));
$scope.show=()=>{
    $http.post('/api/keepin_user/',user).then(()=>{

    },(err)=>{console.log(err)});
  

}


}])