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
addDb=require('./models');//Importing index.js file

app.post('/addStock',stockCtrl.addToStock);
app.post('/addCustomer',customerCtrl.addCustomer);
app.post('/addCategory',catogaryCtrl.addToCategory);

app.get('/getStock',stockCtrl.getFromStock);

app.post('/deleteStock',stockCtrl.deletFromStock);


app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1>");
});



app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})