const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken');
const keys = require ('../../config/keys');
const passport = require('passport');

//load validation
const validateRegisterInput = require ('../../validation/register')
const ValidateLoginInput = require ('../../validation/login')

//load user
const User = require('../../models/User')

//route - GET users/test
//desc - test users route
// public
router.get('/test', (req,res) => res.json({msg:"users works"}));

//route - POST users/register
//desc - register user
// public
router.post('/register', (req,res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid){ 
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                errors.email = 'email already exists'
                return res.status(400).json(errors)
            } else {
                const newUser = new User ({
                    artist: req.body.artist,
                    userName: req.body.userName,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
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

//route - POST api/users/login
//desc - register user
// public
router.post('/login' , (req,res) => {
    const {errors, isValid} = ValidateLoginInput(req.body);

    if(!isValid){ 
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({email})
    .then(user =>{
        if(!user) {
            errors.email = 'user not found'
            return res.status(404).json(errors)
        }

        //check password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    //user matched
                    const payload = {id: user.id, userName: user.userName, name: user.firstName + user.lastName}
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
                    errors.password = 'incorrect password'
                    return res.status(400).json(errors)
                }
            })
    })
})



module.exports = router;