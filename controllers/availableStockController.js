
var db=require('../models');

var AvailableStock=db.stocks;

var addToStock=async (req,res)=>{

    let name=req.body.product_name;
    let unit=req.body.product_unit;
    let category=req.body.product_category;
    let sale_price=req.body.product_sale_price;
    let product_mrp=req.body.product_mrp;
    let product_desc=req.body.product_description;

    let data=await AvailableStock.create({
        name:name,description:product_desc,unit:unit,category:category,sale_price:sale_price,
        mrp:product_mrp
    });
    console.log("Product Name :",name);
    var response = data;
     
    res.status(200).json(response);

}

var getFromStock=async (req,resp)=>{
    let data= await AvailableStock.findAll({});// findOne find one record

    //delet
   /*  let data=await Contacts.destroy({
        where:{
            id:2
        }
     })*/

    //--------Find end<----------// 
    var response = data;
     
    resp.status(200).json(response);

}

var deletFromStock=async(req,res)=>{

    let p_id=req.body.prodId;

    let data=await AvailableStock.destroy({
        where:{
            id:p_id, 
             }
        })
     
        console.log('pid:',p_id);
       var response = data;
     
        res.status(204).json(response);
}

module.exports={
    addToStock,getFromStock,deletFromStock
}