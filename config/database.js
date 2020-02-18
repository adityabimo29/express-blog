const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://porus:12345@cluster0-gb7ng.azure.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
console.log('Database Connected')
}).catch(error=>{
    console.log(error)
})

const db = mongoose.connection;

module.exports = db;