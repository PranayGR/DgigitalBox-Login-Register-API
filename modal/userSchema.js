const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    role:String
})

mongoose.model('user',userSchema);
module.exports = mongoose.model('user')