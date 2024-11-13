const mongoose = require('mongoose');
const Individual = require('./individual');
const Application = require('./application');
const Schema = mongoose.Schema;

const ExhibitorSchema = new Schema({
  //* identity and contact:
  businessName: String,
  job: String,
  specialty: String,
  person: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Individual',
    },
  ],
  contact: {
    email: [String],
    phone: [String],
    adress: [String],
    socialMedia: [String],
    webSite: [String],
  },
  status: {
    committeeAncient: Boolean,
    newcomer: Boolean,
    veteran: Boolean, //+ than 5 years
    afficionados: Boolean, //skip step 1 == systematically interested
    disappointed: Boolean, //no more interested
    banished: Boolean,
  },
  //*application + steps :
  steps: {
    step1interest: Boolean,
    step2needInfo: Boolean,
    step3contract: { received: Boolean, send: Boolean, inOrder: Boolean },
    step4payment: { received: Boolean, announced: Boolean },
    step5advertOnWebsite: Boolean,
    step6welcoming: Boolean,
    step7refund: Boolean,
    step8recontactNextYear: Boolean,
  },
  application: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Application',
    },
  ],
  //* list of exchanged emails:
  lastEmails: [
    { Timestamp: Date, summary: String, object: String, content: String },
  ],
  //* personal notes:
  description: [String], //domain/exhibitor description
  memo: [String], //memo for later
  feedbacks: { edition: Number, review: String },
});
module.exports = Exhibitor = mongoose.model('Exhibitor', ExhibitorSchema);
