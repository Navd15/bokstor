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
    address: { type: String, required: true }
})

var users = mongoose.model('users', new userSchema);




// get all users
module.exports.getAllUsers = (callback, limit) => {
    users.find(callback).limit(limit);
}

// add user
module.exports.addUser = (user, callback) => {

    users.create(user, callback);

}

// update user credentials

module.exports.updateUser = (id, credentials, options, callback) => {
    var query = { _id: id };
    var update = {
        name: credentials.name,
        emailid: credentials.emailid,
        username: credentials.username,
        password: credentials.password,
        address: credentials.address

    }
    users.findByIdAndUpdate(query, update, options, callback);


}
