const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

// require the user model !!!!
const User = require("../../models/User");

authRoutes.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).json({ message: "Provide email and password" });
    return;
  }

  if (password.length < 5) {
    res.status(400).json({
      message:
        "Please make your password at least 6 characters long for security purposes."
    });
    return;
  }

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "email check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "email taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      email: email,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = authRoutes;

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const passport = require("passport");

// //load validation
// const validateRegisterInput = require("../../validation/register");
// const ValidateLoginInput = require("../../validation/login");

// //load user
// const User = require("../../models/Artist");

// //starting point '/'

// //register user
// //public
// router.post("/register", (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       errors.email = "email already exists";
//       return res.status(400).json(errors);
//     } else {
//       const newUser = new User({
//         artist: req.body.artist,
//         userName: req.body.userName,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         avatar: req.body.avatar,
//         company: req.body.company,
//         nationality: req.body.nationality,
//         password: req.body.password,
//         savedArtists: []
//       });

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// //login user
// // public
// router.post("/login", (req, res) => {
//   const { errors, isValid } = ValidateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   // find user by email
//   User.findOne({ email }).then(user => {
//     if (!user) {
//       errors.email = "user not found";
//       return res.status(404).json(errors);
//     }

//     //check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         //user matched
//         const payload = {
//           id: user.id,
//           userName: user.userName,
//           name: user.firstName + user.lastName
//         };
//         //get token
//         jwt.sign(payload, keys.secret, { expiresIn: 360000 }, (err, token) => {
//           res.json({
//             userid: user.id,
//             success: true,
//             token: "bearer " + token
//           });
//         });
//       } else {
//         errors.password = "incorrect password";
//         return res.status(400).json(errors);
//       }
//     });
//   });
// });

// module.exports = router;
