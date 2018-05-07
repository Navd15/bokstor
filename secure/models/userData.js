var mongoose = require('mongoose');

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: [{ type: Number, required: false ,product:Number}],

    cartvalue: {
        type: Number,
        default: 0
    }



})

var users=mongoose.model('users',new userSchema);

// 
// 
// 
// get all users
module.exports.getAllUsers=(callback,limit)=>{
users.find(callback).limit(limit);
}

// add user
module.exports.addUser=(user,callback)=>{

users.create(user,callback);

}

// update user credentials

module.exports.updateUser=(id,credentials,options,callback)=>{
var query={_id:id};
var update={



}
    users.findByIdAndUpdate(query,update,options,callback);


}
