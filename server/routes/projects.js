const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/project-model');
const User = require('../models/user-model');

//GET route to retrieve all projects 
router.get('/projects', (req, res, next) => {
   Project.find()
        .then(allTheProjects => {
            res.json(allTheProjects);
        })
        .catch(err => {
            res.json(err)
        })
});

//GET route to retrieve a specific project
router.get('/artist-profile/:userId/projects/:projectId', (req, res, next) => {

    Project.findById(req.params.projectId)
        .then(theProject => {
            res.status(200).json(theProject);
        })
        .catch(err => {
            res.json(err)
        })
});

//POST route to create a project
router.post('/projects', (req, res, next) => {
    Project.create({
        name: req.body.name,
        location: req.body.location,
        event: req.body.event,
        videos: [],
        date: req.body.date,
        artist: req.body.userId,
    })
        .then(response => {
            User.findByIdAndUpdate(req.body.userId, { $push: { projects: response._id } })
                .then(theResponse => {
                    res.json(theResponse);
                })
                .catch(err => {
                    res.json(err);
                })
        })
        .catch(err => {
            res.json(err);
        })
})

//PUT route to update a specific project
router.put('/projects/:projectId', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({ message: `Project with ID ${req.params.id} is updated successfully.` })
        })
        .catch(err => {
            res.json(err);
        })
})

//DELETE route to delete a specific project
router.delete('/projects/:projectId', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Project.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: `Project with ID ${req.params.id} is removed successfully.` })
        })
        .catch(err => {
            res.json(err);
        })
})



module.exports = router;