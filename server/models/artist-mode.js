const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistModel = new Schema({
    username: String,
    name: String,
    lastname: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
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