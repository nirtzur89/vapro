const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUserInput(data) {
 let errors = {};

if (!isEmpty(data.website)){
    if(!validator.isURL(data.website)) {
        errors.website = 'URL not valid'
    }
}  
if (!isEmpty(data.pinterest)){
    if(!validator.isURL(data.pinterest)) {
        errors.pinterest = 'URL not valid'
    }
}  
if (!isEmpty(data.vimeo)){
    if(!validator.isURL(data.vimeo)) {
        errors.vimeo = 'URL not valid'
    }
}  
if (!isEmpty(data.instagram)){
    if(!validator.isURL(data.instagram)) {
        errors.instagram = 'URL not valid'
    }
}  
if (!isEmpty(data.facebook)){
    if(!validator.isURL(data.facebook)) {
        errors.facebook = 'URL not valid'
    }
}  
if (!isEmpty(data.youtube)){
    if(!validator.isURL(data.youtube)) {
        errors.youtube = 'URL not valid'
    }
}   
// if (data.artist === true){
//     if (Validator.isEmpty(data.artistName)){
//         errors.artistName = 'artist name is required';
//      }
// }
return{
     errors,
     isValid: isEmpty(errors)
 };
};