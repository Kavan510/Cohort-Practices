const express = require("express");
const {Usermodel,todomodel}=require("./db");
const mongoose  = require('mongoose')
const jwt=require("jsonwebtoken");
const bcrypt =require('bcrypt')
const {z} =require("zod");

mongoose.connect("mongodb+srv://kavanp7:FiAsPfUrGqFcFk8p@cluster0.xdxul.mongodb.net/todo-app-database");

const JWT_SECRET = "asisdvn";

const app = express();
app.use(express.json());



// i have one doubt in this code : like if i am using salting rounds then is is giving diff password every time ??
app.post("/signup", async function(req, res) {

    const requirebody=z.object({
        email :z.string().min(5).max(15).email(),
        password : z.string().min(8).max(50),
        name:z.string()
    })
// const parsedData= requirebody.parse(req.body);  // throw an err if not meet credentials and stop the execution
const parsedDataWithSecc=requirebody.safeParse(req.body);

    if(!parsedDataWithSecc.success){
        res.json({
            msg:"Format is wrong",
            err: parsedDataWithSecc.error 
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
try{
    const hashpasswd= await bcrypt.hash(password);  // if i remove salt rounds which is 5 here then i don't need to await it 
    await Usermodel.create({
        name: name,
        email: email,
        password: hashpasswd,
    });
    
    res.json({
        message: "You are signed up"
    })
}
catch(e){
    console.log("User already exist");
    res.json({
        msg:"User already exists"
    })
}



});


app.post("/signin", async function(req, res) {

const email= req.body.email
const password = req.body.password;

const response= await Usermodel.findOne({
email:email,
})
// here i have to write resposne.password which gives u hashed password and bcrypt function compares planetxt passwd to hashed passwd only

const passmatch =await bcrypt.compare(password,response.password)
if(passmatch){

    const token =jwt.sign({  
        id:response._id.toString()
    },JWT_SECRET);
    res.json({
      token : token
    })

}
else{
    res.status(403).json({
        message: "Incorrect creds"
    })
}
});


app.post("/todo", function(req, res) {

});


app.get("/todos", function(req, res) {

});

app.listen(3000);