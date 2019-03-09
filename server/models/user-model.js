const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    type: String,
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    avatar: { data: Buffer, contentType: String },
    password: String,
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