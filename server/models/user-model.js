const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    artist: {
        type: Boolean,
        required: true,
        default: false
    },
    userName: {
        type: String,
        required: true
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
    company: String,
    website: String,
    vimeo: String,
    Pinterest: String,
    Instagram: String,
    hashtags: [String],
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    savedArtists: Array,
})

const User = mongoose.model('User', userModel)

module.exports = User;