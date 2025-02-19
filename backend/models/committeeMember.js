const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommitteeMemberSchema = new Schema({
  responsability: String,
  personRef: [
    //^[child]: Individual
    {
      type: Schema.Types.ObjectId,
      ref: 'Individual',
    },
  ],
  comments: [String],
});
module.exports = CommitteeMember = mongoose.model(
  'CommitteeMember',
  CommitteeMemberSchema
);
