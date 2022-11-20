const {Sequelize,DataTypes}=require('sequelize');

//<------ Create Database ---->
const sequelize=new Sequelize('mat_app_db','root','',{
    host:'localhost',
    dialect:'mysql',
   // logging:false, //To hide all queries from terminal at runtime
    pool:{max:5,min:0,idle:10000},
});
//<------- Creation End ------>

//------>Connect to database<-------
sequelize.authenticate().then(()=>{ //Check wether connect to db or not
    console.log("Connected");
}).catch(err=>{
    console.log("Error"+err);
});

//------>Connection End <---------

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.sequelize.sync({force:false}).then(()=>{ //force:true Drop all table data forcefully
    console.log("Synchronize successful");
});


db.stocks=require('./available_stock')(sequelize,DataTypes);
db.customers=require('./add_customer')(sequelize,DataTypes);
db.categories=require('./add_category')(sequelize,DataTypes);

db.sequelize.sync().then(()=>{
    console.log("Re-syncing..");
})

module.exports=db;