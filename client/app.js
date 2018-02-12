var myApp=angular.module('myApp',['ng-rout']);
myApp.config(function($routeProvider){

$routeProvider.when('/',{
controller:'BooksController',
templateUrl:'view/book.html'

})
  .when('/book',{
controller:'BooksConttroller',
templateUrl:'views/book.html'

  })
  .when('/book/details/:id',{
  controller:'BooksConttroller',
  templateUrl:'views/book_detail.html'

  })
  .when('/book/add',{
controller:'BooksConttroller',
templateUrl:'views/add_book.html'

  })
  .when('/book/edit'
  controller:'BooksConttroller',
  templateUrl:'views/edit_book.html'

  })
  .otherwise({
redirectTo:'/'

  })
})
