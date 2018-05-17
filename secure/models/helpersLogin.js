var  keepin=require('./userData');


class helpers{

emailCheck(email){
return new Promise(function(resolve,reject){
keepin.user.findOne({emailid:email},(err,res)=>{
    console.log(res);
    if(res==null){ 
        console.log("false");
        resolve(false);}
 
    else
    console.log("true");
    resolve(true);
    }
    );


})

}

}


module.exports=new helpers();
