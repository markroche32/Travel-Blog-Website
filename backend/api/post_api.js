var express = require('express');
var postRouter = express();
var multer = require('multer');

var postSQL = require('../models/post');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()  + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/jpg' ) {
    cb(null, true);
  } else {
    cb("File type not supported must be jpg|jpeg|png|gif", false);
  }
};

var upload = multer({storage: storage, fileFilter: fileFilter});

postRouter.post('/savepost', upload.single('image'), (req, res, next) => {
          
    console.log("req file = " + req.file);

    var post = JSON.parse(req.body.post)
    post['imagepath'] = 'uploads/' + req.file.filename;

    console.log("req req.body.post = " + JSON.stringify(post));
    console.log("post title = " + post.title);

    postSQL.addPost(post, function (err, info) {
        if (err) throw err;
      
            post['id'] = info['insertId'];
            res.json(post);	
    });
    
});


module.exports = postRouter;