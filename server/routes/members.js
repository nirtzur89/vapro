const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Member = require('../models/member-model');
//const Artist = require('../models/artist-model'); // <== !!!


// POST route => to create a new Member
router.post('/members', (req, res, next)=>{
console.log(req.body)
  Member.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    avatar: req.body.avatar,
    password: req.body.password,
    savedArtists:req.body.savedArtists 
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;