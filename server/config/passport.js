const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require ('../models/user-model');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = passport => {
    passport.use(new jwtStrategy(opts, (jwt_payload, done) =>{
       User.findById(jwt_payload.id)
        .then(user =>{
          if(user){
              return done(null, user);
          }  
          return done(null, false);
        }) 
        .catch(err => console.log(err));
    }))
};