

module.exports=((sequelize,DataTypes)=>{
    const Authuser=sequelize.define('register_user',{
        username:DataTypes.STRING,
        password:DataTypes.STRING,
    })

    return Authuser;
})