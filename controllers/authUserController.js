
var db=require('../models');

const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

var AuthUser=db.authuser;


var loginUser=async (req,res)=>{

    let u_name=req.body.uname;
    let u_pass=req.body.password;
    let u_email=req.body.email;

   /* let data=await AuthUser.create({
        username:u_name,password:u_pass,email:u_email
    });*/

    let user=await AuthUser.findAll({
       where:{username:u_name,password:u_pass,} 
    });

    console.log('Uname and pwd is :',u_name,u_pass);

    var response={userId:'11',role:'admin',accessToken:'jdhddgdgg2443kgkgk'};
    console.log("Response is",user); 
    if(user!= 0){
       // res.status(200).json(user);
        jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
    }else{
        res.json({message:'Error'});
    }
    


}

var registerUser=async (req,res)=>{

    let u_name=req.body.regData.userName;
    let u_pass=req.body.regData.userPass;
    let u_email=req.body.regData.email;

    let data=await AuthUser.create({
        username:u_name,password:u_pass,email:u_email
    });

    console.log('Uname and pwd is :',u_name,u_pass,u_email);

    
    if(data){
     var response={message:'User register successully'};
     res.status(200).json(response);
    }else{
        res.json({message:'errr occur'});
    }

    


}

var  authorizeUser=async (req,res)=>{

   // let uid=req.params.uid;
    let head=req.headers.authorization;

    console.log("Uid and header is :",head);

    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result:'Invalid token'})
        }else {
            res.json({
                message:"Profile accessed",
                authData
            })
        }
    })

   // res.status(200).json('Success');

}

function verifyToken(req,resp,next){

    const bearerHeader=req.headers['authorization'];
   if(typeof bearerHeader !== 'undefined'){
    
    const bearer=bearerHeader.split(" ");
    const token= bearer[1];
    req.token=token;
    next();
   }else{
       resp.send({
           result:'Token is not valid'
       })
   }
}

module.exports={loginUser,registerUser,authorizeUser}