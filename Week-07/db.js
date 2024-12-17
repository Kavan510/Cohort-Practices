const mongoose = require('mongoose')
const ObjectId=mongoose.ObjectId;

const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});



const Todo = new Schema({
    title:String,
    userId:ObjectId,
    done:Boolean
})


const Usermodel= mongoose.model('users',User);
const todomodel = mongoose.model('todos',Todo);

module.exports = {
    Usermodel:Usermodel,
    todomodel:todomodel
}