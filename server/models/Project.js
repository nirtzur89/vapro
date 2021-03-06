const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectModel = new Schema({
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
  name: String,
  description: String,
  location: String,
  event: String,
  techniques: [String],
  fotos: [String],
  videos: [String],
  date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Projects", projectModel);

module.exports = Project;
