const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const passport = require ('passport');
const keys = require ('../../config/keys')

//load models
//profile
const Profile = require('../../models/Profile')
//user
const User = require('../../models/User')

//route - GET api/profile/test
//des - testing route
//access - public
router.get('/test', (req,res) => res.json({msg: 'profile works'}))


//route - GET api/profile
//des - get CURRENT users profile
//access - private
router.get('/', passport.authenticate('jwt', {session: false}),(req, res) =>{
    const errors = {};

    Profile.findOne({user: req.user.id})
        .then(profile =>{
            if(!profile){
                errors.noprofile = 'there is no profile for this user'
                return res.status(404).json(errors)
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
})

//route - POST api/profile
//des - create users profile
//access - private
router.post('/', passport.authenticate('jwt', {session: false}),(req, res) =>{
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    //hashtags
    if(typeof req.body.hashtags !== 'undefined'){
        profileFields.hashtags = req.body.hashtags.split(',');
    } 

    //if(req.body.savedArtists) profileFields.savedArtists = req.body.savedArtists;
    //if(req.body.projects) profileFields.projects = req.body.projects;
    
    //social
    profileFields.social = {};
    if(req.body.vimeo) profileFields.social.vimeo = req.body.vimeo;
    if(req.body.pinterest) profileFields.social.pinterest = req.body.pinterest;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;

    Profile.findOne({user: req.user.id})
        .then(profile =>{
            if (profile){
                //update
                Profile.findOneAndUpdate(
                    {user: req.user.id},
                    {$set: profileFields},
                    {new: true}
                ).then(profile => res.json(profile))
            } else{
                //create
                //check handle
                Profile.findOne({handle:profileFields.handle}).then(profile => {
                   if(profile) {
                       errors.handle = 'that handle already exists'
                       res.status(400).json(errors);
                   } 
                //save profile
                new Profile(profileFields).save().the(profile=> res.json(profile))   
                })
            }
        })
})

module.exports = router;