var mongoose=require('mongoose');

//books schema
var bookSchema=mongoose.Schema({
title:{
  type:String,
  required:true,
},
author:{
type:String,
  required:true
},
genre:{
  type:String,
  required:true
},
description:{
type:String,
},
publication:{
  type:String,
},
pages:{
type:String

},
image_url:{
type:String

},
buy_url:{
type:String


},

create_date:{
type:Date,
  default:Date.now
}


});


var Books=module.exports=mongoose.model('Books',bookSchema);

  //get books

  module.exports.getBooks=function(callback,limit){
Books.find(callback).limit(limit);

  };

//getBookById
  module.exports.getBookById=function(id,callback){

   Books.findById(id,callback);
  
  };

  // getBooksByAttrib
module.exports.findBookByAttrib=function(attrib,callback){
var filters=attrib.split(':');
var que=filters[0];
var query={};
query[que]=new RegExp(filters[1],'i');

console.log(query);
  Books.find(query,callback);
}


//add book

module.exports.addBook=function(book,callback){

Books.create(book,callback);

};

//update book

module.exports.updateBook=function(id,book,options,callback){
var query={
_id:id
  };

  var update={
    title:book.title,
    author:book.author,
    genre:book.genre,
    description:book.description,
    publication:book.publication,
    pages:book.pages,
    image_url:book.image_url,
    buy_url:book.buy_url
  };
Books.findOneAndUpdate(query,update,options,callback);

};

module.exports.removeBook=function(id,callback){
  var query={
  _id:id
    };
Books.remove(query,callback);

};
