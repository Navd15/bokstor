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

credCheck(email,password){
return new Promise((resolve,reject)=>{
keepin.user.findOne({emailid:email},(err,result)=>{
if(result!=null){
if(result.password==password){
resolve(true);

}
else
resolve({err:504})

}
else
resolve({err:404})


})


})

}


}


module.exports=new helpers();
