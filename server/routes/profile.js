const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User = require('../models/user-model')






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