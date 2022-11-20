


module.exports=((sequelize,DataTypes)=>{
    const Categories=sequelize.define('product_category',{ //product_category is table name, available_stock table automatic create if it not exist.
        type:DataTypes.STRING,
        name:DataTypes.STRING,
         
        
        
        
        
    },{
      //  tableName:'userData', //Used change name of table
       // timestamps:false //delete createdAt and updatedAt column from users table
    })

    return Categories;
    //------End sqeulize-----------
})