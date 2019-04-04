const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../../models/Artist");
const Project = require("../../models/Project");
const Artist = require("../../models/Artist");
const ValidateProjectInput = require("../../validation/project");

router.get("/projects", (req, res, next) => {
  Project.find()
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to retrieve a specific Project
router.get("/artists/:artistId/projects/:projectId", (req, res, next) => {
  Project.findById(req.params.taskId)
    .then(theProject => {
      res.json(theProject);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => to create a new Project
router.post("/projects", (req, res, next) => {
  Project.create({
    owner: req.user._id,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    event: req.body.event,
    videos: [],
    date: req.body.date,
    artist: req.body.artistID
  })
    .then(response => {
      Artist.findByIdAndUpdate(req.body.artistID, {
        $push: { tasks: response._id }
      })
        .then(theResponse => {
          res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific project
router.put("/projects/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Project.findByIdAndUpdate(req.params.id, req.body)
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
router.delete("/projects/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Project with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

// //route GET api/projects/test
// //des test project route
// //acc public
// router.get(
//   "/test",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => res.json({ msg: "project route works" })
// );

// //route POST api/projects/
// //des create project
// //acc private
// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = ValidateProjectInput(req.body);
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//     Project.create({
//       name: req.body.name,
//       description: req.body.description,
//       location: req.body.location,
//       event: req.body.event,
//       videos: [],
//       date: req.body.date,
//       artist: req.user._id
//     })
//       .then(response => {
//         User.findByIdAndUpdate(req.body.userId, {
//           $push: { projects: response._id }
//         }).then(response => res.json(response));
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   }
// );

// //GET api/projects/all
// //GET route to retrieve all projects
// //public
// router.get("/", (req, res, next) => {
//   Project.find()
//     .then(allTheProjects => {
//       res.json(allTheProjects);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// //GET route to get my projects
// //private
// router.get(
//   "/myprojects",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Project.find({ artist: req.user._id })
//       .then(allTheProjects => {
//         res.json(allTheProjects);
//       })
//       .catch(err => {
//         res.status(404).json({ nopost: "No projects under this id" });
//       });
//   }
// );

// //GET /api/artists/:artistName/projects/:projectID
// //GET route to retrieve a specific project
// //public
// router.get("/artist/:projectId", (req, res, next) => {
//   Project.findById(req.params.projectId)
//     .then(theProject => {
//       res.status(200).json(theProject);
//     })
//     .catch(err => {
//       res.status(404).json({ nopost: "No projects under this id" });
//     });
// });

// //PUT route to update a specific project
// //private
// router.put(
//   "/:projectId",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     User.findById(req.user).then(user => {
//       Project.findById(req.params.id).then(project => {
//         if (user._id.toString() !== project.artist.toString()) {
//           console.log(user._id, "---", project.artist);
//           return res.status(401).json({ notAuthorized: "User not authorized" });
//         }
//         project
//           .findByIdAndUpdate(req.params.id, req.body)
//           .then(() => {
//             res.json({
//               message: `Project with ID ${
//                 req.params.id
//               } is updated successfully.`
//             });
//           })
//           .catch(err =>
//             res.status(404).json({ projectnotfound: "no project found" })
//           );
//       });
//     });
//   }
// );

// //DELETE route to delete a specific project
// //private
// router.delete(
//   "/:projectid",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     console.log("body", req.url);
//     Project.find({ _id: req.url })

//       .then(project => {
//         project.remove().then(() =>
//           res.json({
//             message: `Project with ${req.params.id} is removed successfully.`
//           })
//         );
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   }
// );
// //     User.findById(req.user._id).then(user => {
// //       Project.findOne(req.params.id)
// //         .then(project => {
// //           if (user.toString() !== project.artist.toString()) {
// //             console.log(user._id, "---", project.artist);
// //             return res
// //               .status(401)
// //               .json({ notAuthorized: "User not authorized" });
// //           }
// //           project.remove().then(() => res.json({ success: true }));
// //         })
// //         .catch(err =>
// //           res.status(404).json({ projectnotfound: "no project found" })
// //         );
// //     });
// //   }
// // );
