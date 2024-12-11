const express= require("express");
const app=express();


app.get('/sum',(req,res)=>{

const a=parseInt(req.query.a);
const b=parseInt(req.query.b);

if(isNaN(a) || isNaN(b)){
    res.status(400).send('Invalid input');
    return;
}

res.json({
answer:a+b, // don't put ; here it'll end up with err
});

});

app.get('/multiply',(req,res)=>{

});

app.get('/subtract',(req,res)=>{

});
app.get('/divid',(req,res)=>{

});

app.listen(3000);

