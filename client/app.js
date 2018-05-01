var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){


$routeProvider.when('/',{
controller:'BooksController',
templateUrl:'views/book.html'
})
    .when('/admin',{
    templateUrl:'./views/adminLogin.html'

}).when('/login',{
  templateUrl:'views/dual.html'
})
  .when('/book',{
controller:'BooksController',
templateUrl:'views/book.html'

  })
  .when('/book/details/:id',{
  controller:'BooksController',
  templateUrl:'views/book_detail.html'

  })
  .when('/book/add',{
controller:'BooksController',
templateUrl:'views/add_book.html'

  })
  .when('/book/edit',{
  controller:'BooksController',
  templateUrl:'views/edit_book.html'

  })
    .when('/admin/listBooks',{
      controller:'adminController',
        templateUrl:'views/listBooks.html'

    })
})
