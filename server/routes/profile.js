const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User = require('../models/user-model')
const Project = require('../models/project-model');


//get all artists
router.get('/artist-profile', (req, res, next) => {
    User.find({type: "artist"}).populate('projects')
    .then(allTheArtists => {
        res.json(allTheArtists);
    })
    .catch(err => {
        res.json(err)
    })
});

//get all members
router.get('/member-profile', (req, res, next) => {
    User.find({type: "member"}).populate('projects')
    .then(allTheArtists => {
        res.json(allTheArtists);
    })
    .catch(err => {
        res.json(err)
    })
});


module.exports = router;