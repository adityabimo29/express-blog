const express   = require('express');
const {multer}    = require('../../config');
const router    = express.Router();
const {getAll,postData,login,getById}  = require('./controller');


router.get('/',getAll);
router.post('/register',multer.single('avatar'),postData);
router.post('/login',login);
router.get('/detail/:id',getById);

module.exports = router;
