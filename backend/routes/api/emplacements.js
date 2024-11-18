const express = require('express');
const router = express.Router();

const Emplacement = require('../../models/emplacement');

//* @route    GET api/emplacements
//  @desc     Get All Emplacements
//  @access   Public
router.get('/', (request, response) => {
  Emplacement.find()
    .sort({
      _id: 'ascending', //alphabetical order
    })
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    )
    .then((emplacements) => response.json(emplacements));
});

//todo: à tester
//* @route    POST api/emplacements
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newEmplacement = new Emplacement({
    name: request.body.name,
    localisation: request.body.localisation,
    sunshineHours: request.body.sunshineHours,
    description: request.body.description,
    isAvailable: request.body.isAvailable,
  });
  newEmplacement
    .save()
    .then((emplacement) => response.json(emplacement))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

//todo: tester:
//* @route    DELETE api/emplacements/:id
//  @desc     Delete An Emplacement
//  @access   Public
router.delete('/:id', (request, response) => {
  Emplacement.findById(req.params.id)
    .then((emplacement) =>
      emplacement.remove().then(() => response.json({ success: true }))
    )
    .catch((err) => response.status(404).json({ succes: false }));
});

module.exports = router;
