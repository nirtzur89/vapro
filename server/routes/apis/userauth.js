const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken');
const keys = require ('../../config/keys');
const passport = require('passport');
//load user
const User = require('../../models/user-model')

//route - GET api/users/test
//desc - test users route
// public
router.get('/test', (req,res) => res.json({msg:"users works"}));

//route - GET api/users/register
//desc - register user
// public
router.post('/register', (req,res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.status(400).json({email: "email exists"})
            } else {
                const newUser = new User ({
                    artist: req.body.artist,
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    avatar: req.body.avatar,
                    company: req.body.company,
                    password: req.body.password,
                    savedArtists: [],
                });

                bcrypt.genSalt(10, (err, salt) =>{
                   bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if(err) throw err;
                      newUser.password = hash;
                      newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                   }) 
                })
            }
        })
});

//route - GET api/users/login
//desc - register user
// public
router.post('/login' , (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({email})
    .then(user =>{
        if(!user) {
            return res.status(404).json({email: 'user not found'})
        }

        //check password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    //user matched
                    const payload = {id: user.id, username: user.username, name: user.firstname + user.lastname}
                    //get token
                    jwt.sign(
                        payload, keys.secret, 
                        { expiresIn: 3600 }, 
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'bearer ' + token
                            })
                        }
                    );
                }else{
                    return res.status(400).json({password: 'password incorrect'})
                }
            })
    })
})

// current user
//private
router.get('/current' , passport.authenticate('jwt', {session: false}),(req,res) =>{
    res.json({msg: 'success'});
});

module.exports = router;