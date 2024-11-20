const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualSchema = new Schema({
  name: { first: String, last: String },
  contact: {
    email: [String],
    phone: [Number],
    adress: [String],
    socialMedia: [String],
    webSite: [String],
  },
  languages: {
    prefLanguage: String,
    francais: Boolean,
    nederlands: Boolean,
    english: Boolean,
  },
  memo: [String],
});
module.exports = Individual = mongoose.model('Individual', IndividualSchema);
