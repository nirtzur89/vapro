const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const validateUserInput = require("../../validation/user");

//load models
//profile
const Artist = require("../../models/Artist");
const Project = require("../../models/Project");

// POST route => to create an artist page
router.post("/artist", (req, res, next) => {
  Artist.findOne({ email: req.body.email }).then(artist => {
    if (artist) {
      errors.email = "this user already has an active profile";
      return res.status(400).json(errors);
    } else {
      Artist.create({
        owner: req.user._id,
        userName: req.user.userName,
        artistUserName: req.body.userName,
        artistUserId: req.body.artist,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        artistName: req.body.artistName,
        email: req.body.email,
        avatar: {},
        password: req.body.password,
        bio: req.body.bio,
        nationality: req.body.nationality,
        techniques: [],
        companies: [],
        website: req.body.website,
        social: {
          vimeo: req.body.vimeo,
          pinterest: req.body.instagram,
          instagram: req.body.instagram,
          facebok: req.body.facebook,
          youtube: req.body.youtube
        },
        hashtags: [],
        projects: [],
        title: req.body.title,
        description: req.body.description
      })
        .then(response => {
          res.json(response);
        })
        .catch(err => {
          res.json(err);
        });
    }
  });
});

// GET route => to get all the artists
router.get("/artists", (req, res, next) => {
  Artist.find()
    //.populate("projects")
    .then(allTheArtists => {
      res.json(allTheArtists);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific artist/detailed view
router.get("/artists/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  Artist.findById(req.params.id)
    //.populate("projects")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific project
router.put("/artists/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Artist.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE route => to delete a specific project
router.delete("/artists/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Artist.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Artist with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

// // initial route - '/user'

// //route - GET /user
// //des - get CURRENT users user
// //access - private
// router.get(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const errors = {};
//     console.log("AT ID");
//     User.findById(req.params.id)
//       .then(user => {
//         if (!user) {
//           errors.nouser = "User nor found";
//           return res.status(404).json(errors);
//         }
//         res.json(user);
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// //route - POST /user
// //des - edit users profile
// //access - private
// router.put(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateUserInput(req.body);

//     //check validation
//     if (!isValid) {
//       return res.status(400).jason(errors);
//     }

//     const userFields = {};
//     if (req.user.id) userFields.user = req.user.id;
//     if (req.body.artist) userFields.artist = req.body.artist;
//     if (req.body.userName) userFields.userName = req.body.userName;
//     if (req.body.firstName) userFields.firstName = req.body.firstName;
//     if (req.body.lastName) userFields.lastName = req.body.lastName;
//     if (req.body.email) userFields.email = req.body.email;
//     if (req.body.password) userFields.password = req.body.password;
//     if (req.body.artistName) userFields.artistName = req.body.artistName;
//     if (req.body.bio) userFields.bio = req.body.bio;
//     if (req.body.company) userFields.company = req.body.company;
//     if (req.body.website) userFields.website = req.body.website;
//     //hashtags
//     if (typeof req.body.hashtags !== "undefined") {
//       userFields.hashtags = req.body.hashtags.split(",");
//     }

//     //if(req.body.savedArtists) userFields.savedArtists = req.body.savedArtists;
//     //if(req.body.projects) userFields.projects = req.body.projects;

//     //social
//     userFields.social = {};
//     if (req.body.vimeo) userFields.social.vimeo = req.body.vimeo;
//     if (req.body.pinterest) userFields.social.pinterest = req.body.pinterest;
//     if (req.body.instagram) userFields.social.instagram = req.body.instagram;
//     if (req.body.facebook) userFields.social.facebook = req.body.facebook;
//     if (req.body.youtube) userFields.social.youtube = req.body.youtube;

//     User.findById(req.params.id).then(user => {
//       if (user) {
//         //update
//         console.log("here", req.params.id);
//         User.findOneAndUpdate(
//           { _id: req.params.id },
//           { $set: userFields },
//           { new: true }
//         ).then(user => res.json(user));
//       } else {
//         // //create
//         // //check user
//         // User.findOne({user:userFields.user}).then(user => {
//         //    if(user) {
//         //        errors.user = 'that user name already exists'
//         res.status(400).json(errors);
//       }
//       //save user
//       //new User(userFields).save().then(user=> res.json(user))
//     });
//   }
// );

// //route - GET api/user/artists/:artistname
// //des - get artist by artist
// //access - public
// router.get("/artist/:id", (req, res) => {
//   const errors = {};
//   User.find({ _id: req.params.id, artist: true })
//     .then(user => {
//       if (!user) {
//         errors.nouser = "there is no artist page for this user";
//         res.status(404).json(errors);
//       }
//       res.json(user);
//     })
//     .catch(err => res.status(404).json(err));
// });

// //route - GET /user/all
// //des - get all artists users
// //access - public
// router.get("/", (req, res) => {
//   const errors = {};
//   User.find({ artist: true })
//     .populate("Projects")
//     .then(users => {
//       if (!users) {
//         errors.nouser = "there are no users";
//         return res.status(404).json(errors);
//       }
//       res.json(users);
//     })
//     .catch(err => res.status(404).json({ user: "there are no users" }));
// });

// module.exports = router;
