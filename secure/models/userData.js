var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: [{ type: Number, required: false }],

    cartvalue: {
        type: Number,
        productid: String,
        default: 0
    },
    orders: [{
        type: Number,
        required: false
    }]
    ,
    address: { type: String, required: false }
})

var users =module.exports.user= mongoose.model('users', userSchema);




// get all users
module.exports.getAllUsers = (callback, limit) => {
    users.find(callback).limit(limit);
}

// add user
module.exports.addUser = (user, callback) => {

var user = {
    name: user.name,
    emailid: user.email,
    password: user.password,
}

  users.create(user, callback);

}

// update user credentials

module.exports.updateUser = (id, credentials, options, callback) => {
    var query = { _id: id };
    var update = {
        name: credentials.name,
        emailid: credentials.email,
        password: credentials.password,
        address: credentials.address

    }
    users.findByIdAndUpdate(query, update, options, callback);


}
