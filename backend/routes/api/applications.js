const express = require('express');
const router = express.Router();

const Application = require('../../models/application');
const emplacement = require('../../models/emplacement');

//^ APPLICATION
//^> Child: exhibitor (> Child: individual)
//^> Child: emplacement (> Child: ∅)

//* @route    GET api/applications
//  @desc     Get All Applications
//  @access   Public
router.get('/', (request, response) => {
  Application.find()
    // .populate({ path: 'emplacementId', select: 'name' })
    .populate('emplacementId')
    .sort({
      year: 'descending', //begins with latest year
    })
    .then((applications) => response.json(applications))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

//* @route    GET api/applications/:id
//  @desc     Get One Application
//  @access   Public
router.get('/:id', (request, response) => {
  Application.findById(request.params.id)
    .populate({ path: 'emplacementId' })
    .then((applications) => response.json(applications))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

//todo: if(year == year && exhibitor == exhibitor) {*update* instead of create}
//* @route    POST api/applications
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newApplication = new Application({
    year: request.body.year,
    exhibitorRef: request.body.exhibitorRef, //^>Child
    emplacementRef: request.body.exhibitorRef, //^>Child
    stall: {
      FWB: request.body.FWB,
      height: request.body.height,
    },
    amount: request.body.amount,
    advertising: request.body.advertising,
    nbTables: request.body.nbTables,
    nbChairs: request.body.nbChairs,
    nbPass: request.body.nbPass,
    electricity: {
      access: request.body.access,
      nbwatts: request.body.nbwatts,
      devices: request.body.devices,
    },
    specificRequests: request.body.specificRequests,
    comments: request.body.comments,
  });
  newApplication
    .save()
    .then((application) => response.json(application))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

module.exports = router;
