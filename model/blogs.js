const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const blogSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    },
    image:{
        type:String

    },
    publish:{
        type:Date,
        default:Date.now
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
})

const blogs = mongoose.model('blogs',blogSchema);
module.exports = blogs;