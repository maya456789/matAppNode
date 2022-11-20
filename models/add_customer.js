


module.exports=((sequelize,DataTypes)=>{
    const Customers=sequelize.define('customer',{ //available_stock is table name, available_stock table automatic create if it not exist.
        name:DataTypes.STRING,
        address:DataTypes.STRING,
        mobile:DataTypes.INTEGER,
        credit_limit:DataTypes.INTEGER 
        
        
        
        
    },{
      //  tableName:'userData', //Used change name of table
       // timestamps:false //delete createdAt and updatedAt column from users table
    })

    return Customers;
    //------End sqeulize-----------
})