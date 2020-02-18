const express   = require('express');
const {multer}  = require('../../config');
const router    = express.Router();
const {getAll,postData,updateData,deleteData,getById,getByAuthor}  = require('./controller');


router.get('/',getAll);
router.get('/detail/:id',getById);
router.get('/author/:id',getByAuthor);
router.post('/add',multer.single('image'),postData);
router.put('/edit/:id',multer.single('image'),updateData);
router.delete('/delete/:id',deleteData);


module.exports = router;
