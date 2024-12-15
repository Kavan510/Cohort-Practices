const express =require('express');

const jwt=require('jsonwebtoken');
const JWT_SECRET ="kahavalankiamok"; 
const app =express();

app.use(express.json());
const users = [];

//this fun should return long random string 
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }
app.post('/signin',function(req,res){
    const username= req.body.username;
    const password= req.body.password;

const user= users.find((u)=>{
    if(u.username === username && u.password == password) return true;
    else return false;
})

if(user){
    // const token=generateToken(); //without jwt

    const token=jwt.sign({
        username:username
    },JWT_SECRET);


    // user.token=token; // no need to store token for jwt 

    res.send({
        token: token,
    })
}
else{
    res.status(403).send({
        msg : "Invalid username or passwd"
    })
    
}
console.log(users);


})

app.post('/signup',function (req,res){

    const username= req.body.username;
    const password= req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        msg: "Hey!! welcome you are signed up"
    })



})


app.get('/me',function(req,res){
    const token=req.headers.token; // jwt maate jwt token hashe

const decodedInfo=jwt.verify(token,JWT_SECRET);  // decoding it 
const username=decodedInfo.username;


     const curruser=users.find((u)=>{
        if(u.username==username) return true;
        else return false;
     })
     if(curruser){
     res.json({
        username:curruser.username,
        password : curruser.password
     })

    }
    else {
        res.send({
            msg:"token invalid"
        })
    }
})

app.listen(3000);
