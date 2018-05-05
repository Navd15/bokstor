var mongoose=require('mongoose');


var userSchema=mongoose.Schema({
    name:{type:String,
    required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        
    }
    


})