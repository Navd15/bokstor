var app = angular.module('myApp');


app.controller('login', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
   
    $http.get('/api/fasstatus/').then((response)=>{
console.log(response)
        if(response.data.loged){
            $location.path('/')

}else
var counter=0;
var creds =$scope.lgnCreds={};
    var user = $scope.user = {};
    $scope.show = () => {
        $http.post('/api/keepin_user/', user).then((result) => {
    
      console.log(result);
        }, (err) => { console.log(err) }
        );


    }

    $scope.login=()=>{
        $('.email, .pass').removeClass('redBorder visible').addClass('hidden');
        console.log(creds);
$http.post('/api/checkCreds',creds).then((result)=>{
    $('input.email, input.pass').removeClass('redBorder hidden').addClass('visible');
    if(result.data==true){
    $location.path('/');
    }
    if(result.data.err==504){
    console.log('505');
    $('.pass').addClass('redBorder visible').removeClass('hidden').val('')}
if(result.data.err==404){
console.log('404');
    $('.email').addClass('redBorder visible').removeClass('hidden');
}
},(err)=>{});

    }

    $scope.forgotPassword=()=>{
   ++counter;
   console.log(counter);
        $('.btn_login').addClass('hidden');
if(counter>1){
    alert(`Email sent to ${creds.email}`);
    location.reload(true);}

    }

    
    })


}])