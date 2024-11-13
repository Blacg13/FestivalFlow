const express = require('express');
const router = express.Router();

const Individual = require('../../models/individual');

//* @route    GET api/individuals
//  @desc     Get All Individuals
//  @access   Public
router.get('/', (request, response) => {
  Individual.find()
    .sort({
      name: 'ascending',
    })
    .then((individuals) => response.json(individuals));
});

module.exports = router;
