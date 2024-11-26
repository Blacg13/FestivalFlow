const express = require('express');
const router = express.Router();

const Exhibitor = require('../../models/exhibitor');

//* @route    GET api/exhibitors
//  @desc     Get All Exhibitors
//  @access   Public
router.get('/', (request, response) => {
  Exhibitor.find()
    // .populate('personRef1')
    // // .populate('personRef2')
    // // .populate('personRef3')
    // // .populate('personRef4')
    // // .populate('personRef5')
    // // .populate('applicationRef')
    // .exec()
    .then((exhibitors) => response.json(exhibitors));
});

//todo: à tester
//* @route    POST api/exhibitors
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newExhibitor = new Exhibitor({
    businessName: request.body.businessName, //String
    job: request.body.job, //String
    specialty: request.body.specialty, //String
    image: request.body.image, //String
    personRef: request.body.personRef, //^>Child
    contact: {
      email: request.body.email, //[String]
      phone: request.body.phone, //[String]
      adress: request.body.adress, //[String]
      socialMedia: request.body.socialMedia, //[String]
      webSite: request.body.webSite, //[String]
    },
    status: {
      //Boolean
      committeeAncient: request.body.committeeAncient,
      newcomer: request.body.newcomer,
      veteran: request.body.veteran,
      afficionados: request.body.afficionados,
      disappointed: request.body.disappointed,
      banished: request.body.banished,
    },
    steps: {
      //Boolean
      step1interest: request.body.step1interest,
      step2needInfo: request.body.step2needInfo,
      step3contract: {
        contractReceived: request.body.step3contract.contractReceived,
        contractSend: request.body.step3contract.contractSend,
        contractInOrder: request.body.step3contract.contractInOrder,
      },
      step4payment: {
        paymentReceived: request.body.step4payment.paymentReceived,
        paymentAnnounced: request.body.step4payment.paymentAnnounced,
      },
      step5advertOnWebsite: request.body.step5advertOnWebsite,
      step6welcoming: request.body.step6welcoming,
      step7refund: request.body.step7refund,
      step8recontactNextYear: request.body.step8recontactNextYear,
    },
    applicationRef: request.body.applicationRef, //^>Child
    // lastEmails
    description: request.body.description, //[String]
    memo: request.body.memo, //[String]
    feedbacks: { edition: request.body.edition, review: request.body.edition }, //[String]
  });
  newExhibitor
    .save()
    .then((exhibitor) => response.json(exhibitor))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

module.exports = router;
