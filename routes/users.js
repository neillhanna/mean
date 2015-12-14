var express = require('express');
var user = require('../userSchema');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
       console.log('openshift var ' + process.env.OPENSHIFT_NODEJS_IP);
       if(process.env.OPENSHIFT_NODEJS_IP == 'undefined') {
            mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev')
       }
       else { 
           mongoose.connect('localhost','dev');
       }
       
        var Find = user.find( {}, 'lastname firstname email', function(err, find){
            //res.send('api');
            res.json(find);
            mongoose.connection.close();
        });
     
    
});

/*insert user */
router.get('/:firstname/:lastname/:email', function(req, res) {
       if(process.env.OPENSHIFT_NODEJS_IP != 'undefined') {
            mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev')
       }
       else { 
           mongoose.connect('localhost','dev');
       }
       
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

/*update user */
router.get('/:firstname/:lastname/:email', function(req, res) {
       if(process.env.OPENSHIFT_NODEJS_IP != 'undefined') {
            mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev')
       }
       else { 
           mongoose.connect('localhost','dev');
       }
       
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

/*delete user */
router.get('/:firstname/:lastname/:email', function(req, res) {
       if(process.env.OPENSHIFT_NODEJS_IP != 'undefined') {
            mongoose.connect('mongodb://admin:6Nx5jAkXlKkQ@127.8.223.130:27017/dev')
       }
       else { 
           mongoose.connect('localhost','dev');
       }
       
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
