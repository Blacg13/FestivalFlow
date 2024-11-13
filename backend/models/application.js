const mongoose = require('mongoose');
const Emplacement = require('./emplacement');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  year: { type: Number, required: true },
  emplacement: {
    type: Schema.Types.ObjectId,
    ref: 'Emplacement',
  },
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
