var db=require('../models');

var Category=db.categories;

var addToCategory=async (req,res)=>{

    let c_name=req.body.category_name;
    let c_type=req.body.category_type;

    let data=await Category.create({
        type:c_type,name:c_name,
    
    });

    var response = data;
     
    res.status(200).json(response);
}

module.exports={
    addToCategory
}