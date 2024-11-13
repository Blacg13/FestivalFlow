const express = require('express');
const router = express.Router();

const Application = require('../../models/application');

//* @route    GET api/applications
//  @desc     Get All Applications
//  @access   Public
router.get('/', (request, response) => {
  Application.find()
    .sort({
      name: 'ascending',
    })
    .then((applications) => response.json(applications));
});

module.exports = router;
