// const User = require("../models/User");
// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcryptjs"); // !!!
// const passport = require("passport");

// passport.serializeUser((loggedInUser, cb) => {
//   cb(null, loggedInUser._id);
// });

// passport.deserializeUser((userIdFromSession, cb) => {
//   User.findById(userIdFromSession, (err, userDocument) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     cb(null, userDocument);
//   });
// });

// passport.use(
//   new LocalStrategy((email, password, next) => {
//     User.findOne({ email }, (err, foundUser) => {
//       if (err) {
//         next(err);
//         return;
//       }

//       if (!foundUser) {
//         next(null, false, { message: "Incorrect username." });
//         return;
//       }

//       if (!bcrypt.compareSync(password, foundUser.password)) {
//         next(null, false, { message: "Incorrect password." });
//         return;
//       }

//       next(null, foundUser);
//     });
//   })
// );

// // const jwtStrategy = require('passport-jwt').Strategy;
// // const ExtractJwt = require('passport-jwt').ExtractJwt;
// // const mongoose = require('mongoose');
// // const User = require ('../models/Artist');
// // const keys = require('../config/keys');

// // const opts = {};
// // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// // opts.secretOrKey = keys.secret;

// // module.exports = passport => {

// //     passport.use(new jwtStrategy(opts, (jwt_payload, done) =>{
// //         User.findById(jwt_payload.id)
// //         .then(user =>{
// //             if(user){
// //               return done(null, user);
// //           }
// //           return done(null, false);
// //         })
// //         .catch(err => console.log(err));
// //     }))
// // };
