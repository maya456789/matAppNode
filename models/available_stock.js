


module.exports=((sequelize,DataTypes)=>{
    const Stocks=sequelize.define('available_stock',{ //available_stock is table name, available_stock table automatic create if it not exist.
        name:DataTypes.STRING,
        description:DataTypes.STRING,
        unit:DataTypes.STRING,
        category:DataTypes.STRING,
        sale_price:DataTypes.INTEGER,
        mrp:DataTypes.INTEGER 
        
        
        
        
    },{
      //  tableName:'userData', //Used change name of table
       // timestamps:false //delete createdAt and updatedAt column from users table
    })

    return Stocks;
    //------End sqeulize-----------
})