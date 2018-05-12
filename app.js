var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userLogin=require('./secure/models/userData');
require('chokidar')
  .watch('.', { ignored: /[\/\\]\./ }).on('all', function (event, path) {
    console.log(event, path);
  });
Genre = require('./models/genres');
Book = require('./models/books');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

//Connect to mongoose

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
  res.send("Could'nt resolve" + req.toString());
});


/*
genre methods
*/

// get genres at api/genres
app.get('/api/genres', function (req, res) {
  Genre.getGenres(function (err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });

});

//post req for genres

app.post('/api/genres/', function (req, res) {
  var genre = req.body;
  Genre.addGenres(genre, function (err, genre) {
    if (err) {
      throw err;

    }
    res.json(genre);

  });

});

app.put('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function (err, genre) {
    if (err) {
      throw err;

    }
    res.json(genre);

  });

});


app.delete('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  Genre.removeGenre(id, function (err, genre) {
    if (err) {

      throw err;
    }

    res.json(genre);
  });

});

/*
book methods
*/


//get books at api/books
app.get('/api/books', function (req, res) {
  Book.getBooks(function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });

});

app.get('/api/books_filter/:filter', function (req, res) {
  var attr = req.params.filter;
  console.log(attr);
  Book.findBookByAttrib(attr, function (err, result) {
    if (err)
      throw err;
    res.json(result)
  })

});

//get book at api/bookId
app.get('/api/books/:_id', function (req, res) {
  Book.getBookById(req.params._id, function (err, book) {
    if (err) {
      throw err;
    } res.json(book);
  });

});

app.post('/api/books/', function (req, res) {
  var book = req.body;
  Book.addBook(book, function (err, book) {
    if (err) {
      throw err;

    }
    res.json(book);

  });

});



app.put('/api/books/:_id', function (req, res) {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function (err, book) {
    if (err) {
      throw err;

    }
    res.json(book);

  });


});


app.delete('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  Book.removeBook(id, function (err, book) {
    if (err) {

      throw err;
    }

    res.json(book);
  });

});

app.get('*', (req, res) => {
  res.end("NO RESULT")
})


//login endpoints

app.post('/api/keepin_user/',(req,res)=>{
var usrData=req.body;
userLogin.addUser(usrData,(err,result)=>{
if(err)
throw err;  
res.json();

})

})


app.listen(3000);
console.log("Running on port 3000");