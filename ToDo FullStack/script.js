
const express =require('express');
const jwt=require("jsonwebtoken")
const path = require('path');
const cors=require('cors');
const app=express();
app.use(express.json());

app.use(cors());
const todolist = []



let cnt=0;
app.post('/add',(req,res)=>{
    const task=req.body.task;
    todolist.push({
        taks:task,
        id:cnt
    })
    res.json({
        msg:"Task has been added",
        id:cnt
    })
    cnt++;
console.log("from add sec:"); // checks the todo list 
console.log(todolist);

})

app.delete('/delete',(req,res)=>{
    // const task=req.params.task;
    const idtoRemove=req.params.id
    console.log("id to remove is :")
    console.log(idtoRemove);
    const index=-1;
    for(let i=0;i<todolist.length;i++){
        if(todolist[i].id==idtoRemove) {
            index=i;
            break
        }
    }

    todolist.splice(index,1);

    res.send({
        msg:"task has been removed"
    })
   


console.log(`from delete sec`);
console.log(todolist);

})


app.listen(3000);