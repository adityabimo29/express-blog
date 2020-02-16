const db = require('./database');
const {PORT} = require('./environment');
const multer = require('./multer');
module.exports = {
    db,
    PORT,
    multer
}