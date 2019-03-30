const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    userName: {
        type: String,
        required: true
    },
    artist: {
        type: Boolean,
        required: true,
        default: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: { data: Buffer, contentType: String },
    password: {
        type: String,
        required: true
    },
    bio: String,
    nationality: {
        type: String,
        default: ''
    },
    techniques: [String],
    companies: [String],
    website: String,
    social: {
        vimeo: String,
        pinterest: String,
        instagram: String,
        facebok: String,
        youtube: String
    },
    hashtags: [String],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    savedArtists: Array
})

const User = mongoose.model('User', userModel)

module.exports = User;