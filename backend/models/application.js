const mongoose = require('mongoose');
const Emplacement = require('./emplacement');
const Schema = mongoose.Schema;

//^ APPLICATION

const ApplicationSchema = new Schema({
  year: {
    type: Number,
    required: true,
    default: new Date().getFullYear(),
  },
  emplacementRef: [
    {
      //^>[child]: Emplacement
      type: Schema.Types.ObjectId,
      ref: 'Emplacement',
      unique: true,
    },
  ],
  stall: {
    FWB: Boolean,
    height: Number,
  },
  amount: Number,
  advertising: Boolean,
  nbTables: Number,
  nbChairs: Number,
  nbPass: Number,
  electricity: {
    access: Boolean,
    nbwatts: Number,
    devices: [String],
  },
  specificRequests: [String],
  comments: [String],
});
module.exports = Application = mongoose.model('Application', ApplicationSchema);
