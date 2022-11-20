
var db=require('../models');

var Customer=db.customers;

var addCustomer=async (req,res)=>{

    let name=req.body.customer_name;
    let address=req.body.customer_address;
    let mobile_no=req.body.customer_mobile;
    let credit_limit=req.body.credit_limit;
    

    let data=await Customer.create({
        name:name,address:address,mobile:mobile_no,credit_limit:credit_limit,
        
    });
    console.log("Customer Name :",name);
    var response = data;
     
    res.status(200).json(response);

}

var getCustomer=async (req,resp)=>{
    let data= await Customer.findAll({});// findOne find one record

    //--------Find end<----------// 
    var response = data;
     
    resp.status(200).json(response);

}

module.exports={
    addCustomer,getCustomer
}