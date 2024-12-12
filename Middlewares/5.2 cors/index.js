const express= require("express");
const app=express();
// const cors=require("cors");

app.use(express.json());
// app.use(cors());

//======================= ===================  to host frontend and backend in same url

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})


app.post('/sum',(req,res)=>{

const a=parseInt(req.body.a);
const b=parseInt(req.body.b);
res.json({
    answer : a+b
})

})

app.listen(3000);