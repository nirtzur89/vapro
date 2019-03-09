const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const memberSchema = new Schema({
  type: String,
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  avatar: String,
  password: String,
  savedArtists: Array,
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;