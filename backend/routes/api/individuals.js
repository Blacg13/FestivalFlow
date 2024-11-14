const express = require('express');
const router = express.Router();

const Individual = require('../../models/individual');

//todo: à tester
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

//todo: à tester
//* @route    POST api/individuals
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newIndividual = new Individual({
    name: request.body.name,
    contact: {
      email: request.body.email,
      phone: request.body.phone,
      adress: request.body.adress,
      socialMedia: request.body.socialMedia,
      webSite: request.body.webSite,
    },
    languages: {
      prefLanguage: request.body.prefLanguage,
      francais: request.body.francais,
      nederlands: request.body.nederlands,
      english: request.body.english,
    },
    memo: request.body.memo,
  });
  newIndividual
    .save()
    .then((individual) => response.json(individual))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

module.exports = router;
