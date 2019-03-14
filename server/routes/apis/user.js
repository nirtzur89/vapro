const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const passport = require ('passport');
const validateUserInput = require ('../../validation/user')

//load models
//profile
const User = require('../../models/User')


//route - GET /user
//des - get CURRENT users user
//access - private
router.get('/:id', passport.authenticate('jwt', {session: false}),(req, res) =>{
     const errors = {};

    User.findById(req.params.id)
         .then(user =>{
             if(!user){
                 errors.nouser = 'please edit user'
                 return res.status(404).json(errors)
             }
             res.json(user);
         })
         .catch(err => res.status(404).json(err));
})

//route - POST /user
//des - edit users profile
//access - private
router.put('/:id', passport.authenticate('jwt', {session: false}),(req, res) =>{
    const {errors, isValid} = validateUserInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).jason(errors);
    }
    
    const userFields = {};
    userFields.user = req.user.id;
    userFields.artist = req.body.artist;
    if(req.body.userName)userFields.userName = req.body.userName;
    userFields.firstName = req.body.firstName;
    userFields.lastName = req.body.lastName;
    userFields.email = req.body.email;
    if(req.body.password)userFields.password = req.body.password;
    if(req.body.artistName) userFields.artistName = req.body.artistName;
    if(req.body.bio) userFields.bio = req.body.bio;
    if(req.body.company) userFields.company = req.body.company;
    if(req.body.website) userFields.website = req.body.website;
    //hashtags
    if(typeof req.body.hashtags !== 'undefined'){
        userFields.hashtags = req.body.hashtags.split(',');
    } 

    //if(req.body.savedArtists) userFields.savedArtists = req.body.savedArtists;
    //if(req.body.projects) userFields.projects = req.body.projects;
    
    //social
    userFields.social = {};
    if(req.body.vimeo) userFields.social.vimeo = req.body.vimeo;
    if(req.body.pinterest) userFields.social.pinterest = req.body.pinterest;
    if(req.body.instagram) userFields.social.instagram = req.body.instagram;
    if(req.body.facebook) userFields.social.facebook = req.body.facebook;
    if(req.body.youtube) userFields.social.youtube = req.body.youtube;

    User.findById(req.params.id)
        .then(user =>{
            if (user){
                //update
                console.log("here",req.params.id)
                User.findOneAndUpdate({ _id: 
                    req.params.id },
                    {$set: userFields},
                    {new: true}
                ).then(user => res.json(user))
            } else{
                // //create
                // //check user
                // User.findOne({user:userFields.user}).then(user => {
                //    if(user) {
                //        errors.user = 'that user name already exists'
                       res.status(400).json(errors);
                   } 
                //save user
                //new User(userFields).save().then(user=> res.json(user))   
                })
            })


//route - GET api/user/artists/:artistname
//des - get artist by artist
//access - public
router.get('/artist/:id', (req,res) => {
    const errors = {};
    User.find({_id: req.params.id,artist:true})
    .then(user =>{
        if(!user){
            errors.nouser = 'there is no artist page for this user';
            res.status(404).json(errors);
        }
        res.json(user);
    })
    .catch(err => res.status(404).json(err));
})

//route - GET api/user/all
//des - get all artists users
//access - public
router.get('/all', (req,res) => {
    const errors = {}
    User.find({artist: true})
    .populate('Projects')
    .then(users=>{
        if(!users){
            errors.nouser = 'there are no users';
            return res.status(404).json(errors)
        }
        res.json(users)
    })
    .catch(err =>
        res.status(404).json({user: 'there are no users'}))
})


module.exports = router;