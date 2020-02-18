const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
console.log('Database Connected')
}).catch(error=>{
    console.log(error)
})

const db = mongoose.connection;

module.exports = db;