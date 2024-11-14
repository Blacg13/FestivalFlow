const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmplacementSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  localisation: String,
  sunshineHours: [Number],
  description: [String],
});
module.exports = Emplacement = mongoose.model('Emplacement', EmplacementSchema);
