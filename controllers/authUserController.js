
var db=require('../models');

var AuthUser=db.authuser;

var registerUser=async (req,res)=>{

    let u_name=req.body.email;
    let u_pass=req.body.password;

   /* let data=await AuthUser.create({
        username:u_name,password:u_pass
    });*/

    console.log('Uname and pwd is :',u_name,u_pass);

    var response={userId:'11',role:'admin',accessToken:'jdhddgdgg2443kgkgk'};

    res.status(200).json(response);


}

var authorizeUser=async (req,res)=>{

    let uid=req.params.uid;
    let head=req.headers.authorization;

    console.log("Uid and header is :",uid,head);

    res.status(200).json('Success');

}

module.exports={registerUser,authorizeUser}