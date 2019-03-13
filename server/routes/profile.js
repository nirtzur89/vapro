const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/User')
const Project = require('../models/Project');


//GET route to retrieve all artists
router.get('/artist-profile', (req, res, next) => {
    User.find({ type: "artist" }).populate('projects')
        .then(allTheArtists => {
            res.json(allTheArtists);
        })
        .catch(err => {
            res.json(err)
        })
});

//GET route to retrieve all members
router.get('/member-profile', (req, res, next) => {
    User.find({ type: "member" }).populate('projects')
        .then(allTheArtists => {
            res.json(allTheArtists);
        })
        .catch(err => {
            res.json(err)
        })
});

//GET route to retrieve a specific artist or member by ID
router.get('/artist-profile/:userId', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User.findById(req.params.id).populate('projects')
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.json(err)
        })
});

//PUT oute to update the profile of an artist
router.put('/artist-profile/:userID', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({ message: `Profile with ID ${req.params.id} is updated successfully.` });
        })
        .catch(err => {
            res.json(err);
        })
})


//PUT route to update the profile of a member
router.put('/member-profile/:userID', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({ message: `Profile with ID ${req.params.id} is updated successfully.` });
        })
        .catch(err => {
            res.json(err);
        })
})





module.exports = router;