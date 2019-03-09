const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectModel = new Schema({
    artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
    name: String,
    location: String,
    event: String,
    videos: String,
    date: { type: Date, default: Date.now },
})

const Project = mongoose.Schema('Project', projectModel);

module.exports = Project;