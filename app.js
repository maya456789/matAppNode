require('dotenv').config();
const express=require("express");
const app=express();



var cors = require('cors');
const bodyParser=require("body-parser");
const port=8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var stockCtrl=require('./controllers/availableStockController');
var customerCtrl=require('./controllers/customerController');
var catogaryCtrl=require('./controllers/addCategoryController');
var authuserCtrl=require('./controllers/authUserController');
var 
addDb=require('./models');//Importing index.js file

app.post('/authUser',authuserCtrl.loginUser);
app.post('/registerUser',authuserCtrl.registerUser);
app.get('/authorizeUser',verifyToken,authuserCtrl.authorizeUser);
app.post('/addStock',stockCtrl.addToStock);
app.post('/addCustomer',customerCtrl.addCustomer);
app.post('/addCategory',catogaryCtrl.addToCategory);

app.get('/getStock',stockCtrl.getFromStock);

app.delete('/deleteStock/:prodId',stockCtrl.deletFromStock);


app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1>");
});

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

//console.log('Database is:',process.env.DATABASENAME);

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})