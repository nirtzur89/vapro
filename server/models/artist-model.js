const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistModel = new Schema({
    type: String,
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    avatar: { data: Buffer, contentType: String },
    password: String,
    bio: String,
    website: String,
    vimeo: String,
    Pinterest: String,
    Instagram: String,
    hashtags: [String],
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

const Artist = mongoose.model('Artist', artistModel)

module.exports = Artist;