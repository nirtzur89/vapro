const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  userName: {
    type: String
  },
  artistUserName: {
    type: String
  },
  artistUserId: String,
  artistName: {
    type: String
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
    type: String
  },
  avatar: { data: Buffer, contentType: String },
  bio: String,
  nationality: {
    type: String,
    default: ""
  },
  techniques: [],
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
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  savedArtists: Array
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
