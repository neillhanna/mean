var express = require('express');
var user = require('../userSchema');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
     mongoose.connect('localhost', 'users');

        var Find = user.find( {}, 'lastname firstname email', function(err, find){
            //res.send('api');
            res.json(find);
            mongoose.connection.close();
        });
     
    
});

/*Post/insert user */
router.get('/:firstname/:lastname/:email', function(req, res) {
     mongoose.connect('localhost', 'users');

     var Post = new user({
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        email: req.params.email
     });

     Post.save(function(err, Post) {
        if (err) return console.error(err);
        console.dir(Post);
        res.json(Post);
        mongoose.connection.close();
     });
    
});

module.exports = router;
