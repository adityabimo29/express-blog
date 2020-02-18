const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:'no-found'
    }
})

const Users = mongoose.model('users',userSchema);

module.exports = Users;