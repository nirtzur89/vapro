const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Artist = require('../models/artist-model')
const Project = require('../models/project-model');

//ONLY for test cases! POST artist should be part of the signup form instead
router.post('/profile', (req, res, next) => {
    Artist.create({
        type: "artist",
        username: req.body.username,
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        avatar: req.body.avatar,
        password: req.body.password,
        bio: req.body.bio,
        website: req.body.webiste,
        vimeo: req.body.vimeo,
        pinterest: req.body.pinterest,
        instagram: req.body.instagram,
        hastags: [],
        projects: []
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json(err);
    })
});

//ONLY for test cases! POST member should be part of the signup form instead
// router.post('/profile', (req, res, next) => {
//     Artist.create({
//         type: "member",
//         username: req.body.username,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         avatar: req.body.avatar,
//         password: req.body.password,
//         savedArtists: [],
//     })
//     .then(response => {
//         res.json(response);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });




//get all artists
router.get('/profile', (req, res, next) => {
    Artist.find().populate('projects')
    .then(allTheArtists => {
        res.json(allTheArtists);
    })
    .catch(err => {
        res.json(err)
    })
})






module.exports = router;