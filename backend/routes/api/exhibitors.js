const express = require('express');
const router = express.Router();

const Exhibitor = require('../../models/exhibitor');

//* @route    GET api/exhibitors
//  @desc     Get All Exhibitors
//  @access   Public
router.get('/', (request, response) => {
  Exhibitor.find().then((exhibitors) => response.json(exhibitors));
});

//todo: à tester
//* @route    POST api/exhibitors
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newExhibitor = new Exhibitor({
    businessName: request.body.businessName,
    job: request.body.job,
    specialty: request.body.specialty,
    personRef: request.body.personRef, //^>Child
    contact: {
      email: request.body.email,
      phone: request.body.phone,
      adress: request.body.adress,
      socialMedia: request.body.socialMedia,
      webSite: request.body.webSite,
    },
    status: {
      committeeAncient: request.body.committeeAncient,
      newcomer: request.body.newcomer,
      veteran: request.body.veteran,
      afficionados: request.body.afficionados,
      disappointed: request.body.disappointed,
      banished: request.body.banished,
    },
    // steps: {
    //   step1interest: request.body.step1interest,
    //   step2needInfo: request.body.step2needInfo,
    //   step3contract: {
    //     contractReceived: request.body.step3contract.contractReceived,
    //     contractSend: request.body.step3contract.contractSend,
    //     contractInOrder: request.body.step3contract.contractInOrder,
    //   },
    //   step4payment: {
    //     paymentReceived: request.body.step4payment.paymentReceived,
    //     paymentAnnounced: request.body.step4payment.paymentAnnounced,
    //   },
    //   step5advertOnWebsite: request.body.step5advertOnWebsite,
    //   step6welcoming: request.body.step6welcoming,
    //   step7refund: request.body.step7refund,
    //   step8recontactNextYear: request.body.step8recontactNextYear,
    // },
    applicationRef: request.body.applicationRef,
    // lastEmails
    description: request.body.description,
    memo: request.body.memo,
    feedbacks: request.body.feedbacks,
  });
  newExhibitor
    .save()
    .then((exhibitor) => response.json(exhibitor))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

module.exports = router;
