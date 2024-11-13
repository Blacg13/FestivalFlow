const express = require('express');
const router = express.Router();

const Emplacement = require('../../models/emplacement');

//* @route    GET api/emplacements
//  @desc     Get All Emplacements
//  @access   Public
router.get('/', (request, response) => {
  Emplacement.find()
    .sort({
      name: 'ascending',
    })
    .then((emplacements) => response.json(emplacements));
});

module.exports = router;
