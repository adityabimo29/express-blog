const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets')
    },
    filename: function (req, file, cb) {
        let filetype = "";
        if(file.mimetype === "image/png") {
            filetype = "png";
        } else if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, file.originalname.replace(/ /g, "_"));
    }
  })
   
  var upload = multer({ storage: storage });

  module.exports = upload;