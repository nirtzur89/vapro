const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
 let errors = {};

 //checks al kinds of emptyness
 data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
 data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
 data.userName = !isEmpty(data.userName) ? data.userName : '';
 data.email = !isEmpty(data.email) ? data.email : '';
 data.password = !isEmpty(data.password) ? data.password : '';
 data.password2 = !isEmpty(data.password2) ? data.password2 : '';
 
 if (!Validator.isLength(data.userName, {min: 2, max: 30 })){
     errors.userName = 'User Name must be between 2 and 30 characters';
 }
 if (Validator.isEmpty(data.userName)){
    errors.userName = 'User Name is required';
}
if (!Validator.isLength(data.firstName, {min: 2, max: 30 })){
    errors.firstName = 'first Name must be between 2 and 30 characters';
}
if (Validator.isEmpty(data.firstName)){
   errors.firstName = 'First Name is required';
}
if (!Validator.isLength(data.lastName, {min: 2, max: 30 })){
    errors.lastName = 'last Name must be between 2 and 30 characters';
}
if (Validator.isEmpty(data.lastName)){
   errors.lastName = 'last Name is required';
}
if (Validator.isEmpty(data.email)){
    errors.email = 'e-mail is required';
 }
if (!Validator.isEmail(data.email)){
    errors.email = 'e-mail is invalid';
 }
if (Validator.isEmpty(data.password)){
    errors.password = 'password is required';
 }
if (!Validator.isLength(data.password, {min: 6, max: 30 })){
    errors.password = 'Password must be between 6 and 30 characters';
}
if (Validator.isEmpty(data.password2)){
    errors.password2 = 'Please confirm Password';
 } 
if (!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match';
 }  
 return{
     errors,
     isValid: isEmpty(errors)
 };
};