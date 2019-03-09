const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const memberSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  // owner will be added later on
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;