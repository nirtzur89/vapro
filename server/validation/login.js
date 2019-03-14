const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
 let errors = {};

 //checks al kinds of emptyness
 data.email = !isEmpty(data.email) ? data.email : '';
 data.password = !isEmpty(data.password) ? data.password : '';

if (!Validator.isEmail(data.email)){
    errors.email = 'e-mail is invalid';
 }
if (Validator.isEmpty(data.email)){
    errors.email = 'e-mail is required';
 } 
if (Validator.isEmpty(data.password)){
    errors.password = 'password is required';
 }
  
 return{
     errors,
     isValid: isEmpty(errors)
 };
};