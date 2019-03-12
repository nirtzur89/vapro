const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User = require('../models/user-model')

//CREATE a new artist-user
router.post('/artist-profile', (req, res, next) => {

    User.create({
        artist: req.body.artist,
        username: req.body.username,
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        avatar: req.body.avatar,
        password: req.body.password,
        bio: req.body.bio,
        website: req.body.website,
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

//CREATE a new member-user
router.post('/member-profile', (req, res, next) => {
    User.create({
        artist: req.body.artist,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: req.body.avatar,
        company: req.body.company,
        password: req.body.password,
        savedArtists: [],
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;