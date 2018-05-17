var app = angular.module('myApp');


app.controller('login', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
console.log($location);
    var user = $scope.user = {};
    console.log($('#eid'));
    $scope.show = () => {
        $http.post('/api/keepin_user/', user).then((result) => {
    
      console.log(result);
        }, (err) => { console.log(err) }
        );


    }

    $scope.login=()=>{
$http.get('')

    }


}])