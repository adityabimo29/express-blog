const {Users}   = require('../../model');
const {hashPassword , comparePass} = require('../../helper');
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: async (req,res) => {
        try {
            const result = await Users.find({});
            res.status(200).send({
                data:result
            })
        } catch (error) {
            console.log(error)
        }
    },
    postData: async (req,res) => {
        try {

            const hashed = await hashPassword(req.body.password);
            const file   = req.file;
            const result = await Users.create({
                ...req.body,
                password:hashed,
                avatar:file === undefined ? 'not-found' : file.path

            })
            res.status(200).send({
                msg: 'Data has been saved',
                data: result
            })

        } catch (error) {
            console.log(error)
        }
    },
    login: async (req,res) => {

        const result = await Users.findOne({email:req.body.email});
        const compared = await comparePass(req.body.password,result.password);
        if(compared){
            const {_id,username,email} = result;
            const token = jwt.sign({_id,username,email},"hey-tayo",{expiresIn:'60m'});
            res.status(200).send({token:token})
        }else{
            res.status(200).send('gagal');
        }
    },
    getById:async (req,res)=>{
        try {
            const idku = req.params.id;
            await Users.findOne({_id:idku}, (err,docs) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({
                    data : docs
                })
            });

        } catch (error) {
            console.log(error)
        }

    },
}
