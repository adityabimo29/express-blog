const express   = require('express');
const {multer}    = require('../../config');
const router    = express.Router();
const {getAll,postData,login}  = require('./controller');


router.get('/',getAll);
router.post('/register',multer.single('avatar'),postData);
router.post('/login',login);

module.exports = router;