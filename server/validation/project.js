const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateprojectInput(data) {
 let errors = {};

 //checks al kinds of emptyness
 data.name = !isEmpty(data.name) ? data.name : '';
 


if (Validator.isEmpty(data.name)){
    errors.email = 'project must have a name!';
 } 

  
 return{
     errors,
     isValid: isEmpty(errors)
 };
};