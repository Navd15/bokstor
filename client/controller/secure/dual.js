var app = angular.module('myApp');


app.controller('login', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
console.log($location);
var creds =$scope.lgnCreds={};
    var user = $scope.user = {};
    console.log($('#eid'));
    $scope.show = () => {
        $http.post('/api/keepin_user/', user).then((result) => {
    
      console.log(result);
        }, (err) => { console.log(err) }
        );


    }

    $scope.login=()=>{
       
        console.log(creds)
$http.post('/api/checkCreds',creds).then((result)=>{
    if(result.data==true)
    $location.path('/');
    if(result.data.err==504)
    console.log('Incorrect password');
    if(result.data.err==404)
    console.log('email-id not found');

},(err)=>{});

    }


}])