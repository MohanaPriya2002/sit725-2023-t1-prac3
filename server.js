var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.render('index.html');
});

// app.get('/add_Two_Numbers',(req,res)=>{
//     let num1 = req.query.number1; // this should return 1
//     let num2 = req.query.number2; // this should return 2
//     let sum = parseInt(num1) + parseInt(num2);
//     let obj = {statusCode:200, message:'success', data:sum}

//     res.json(obj);
// });

app.listen(port, ()=>{
    console.log("App listening to: "+port);
});