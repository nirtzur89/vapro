const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    bio: String,
    company: String,
    website: String,
    social: {
        vimeo: String,
        pinterest: String,
        instagram: String,
        facebok: String,
        youtube: String
    },
    hashtags: [String],
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    savedArtists: Array,
})

module.exports = Profile = mongoose.model('profile' , ProfileSchema)