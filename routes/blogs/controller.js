const {Blogs}   = require('../../model');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    getAll: async (req,res) => {
        try {
            const result = await Blogs.find({}).populate('author','username email');
            res.status(200).send({
                data:result
            })
        } catch (error) {
            console.log(error)
        }
    },
    postData: async (req,res) => {
        try {

            const file   = req.file;
            const result = await Blogs.create({
                ...req.body,
                image:file === undefined ? 'assets/blocky.jpg' : file.path

            })
            res.status(200).send({
                msg: 'Data has been saved',
                data: result
            })

        } catch (error) {
            console.log(error)
        }
    },
    updateData: async (req,res) => {

            try {
                const data = req.body;
                const file   = req.file;
                const idku = req.params.id;

                const oldData = await Blogs.findOne({_id:idku}, (err,docs) => {
                    return docs;
                });
                console.log(oldData.image);
                const result = await Blogs.findByIdAndUpdate(idku,{...data,image:file !== undefined ? file.path : oldData.image}, (err,dt) => {
                    return dt;
                });

                res.status(200).send({
                    message:"Blogs has been updated",
                    data : result

                })

            } catch (error) {
                console.log(error)
            }

    },
    deleteData: async(req,res)=>{

        try {
            await Blogs.deleteOne({_id:req.params.id},(err,result) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({message:`Your Data has been deleted.`,data:result})
            })

        } catch (error) {
            console.log(error)
        }

    },

    getById:async (req,res)=>{
        try {
            const idku = req.params.id;
            await Blogs.findOne({_id:idku}, (err,docs) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({
                    data : docs
                })
            }).populate('author','username email');

        } catch (error) {
            console.log(error)
        }

    },
    getByAuthor:async (req,res)=>{
        try {
            const idku = req.params.id;
            await Blogs.find({"author":idku}).populate('author', 'username').exec( (err,dt) =>{
              res.status(200).send({data:dt})
            });

        } catch (error) {
            console.log(error)
        }

    },

}
