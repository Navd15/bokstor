var mongoose=require('mongoose');

var suSchema=mongoose.Schema({
    name:String,
    rights:String,
    email:String,
    password:String,
    phone:Number,
    recovery:String,
    joined:{
        type:Date,
        default:Date.now()
    }
});


var su=mongoose.model('super',suSchema);


//end points
module.exports.all=(callback)=>{
    su.find(callback());
}

module.exports.info=(email,callback)=>{
    su.find({email:this.email},callback);

}


module.exports.updateInfo=(email,upInfo,callback)=>{
    var up={
        name:upInfo.name,
        rights:upInfo.rights,
        email:upInfo.email,
        phone:upInfo.phone,
        recovery:upInfo.recovery,

    }
su.findOneAndUpdate(email,up,callback)



}

module.exports.addSu=(info,callback)=>{
    var newSu={
        name:info.name,
        email:info.email,
        password:info.password
    }
    su.create(newSu,callback)
}