const express = require('express');
const router = express.Router();

const Exhibitor = require('../../models/exhibitor');

//* @route    GET api/exhibitors
//  @desc     Get All Exhibitors
//  @access   Public
router.get('/', (request, response) => {
  Exhibitor.find().then((exhibitors) => response.json(exhibitors));
});

module.exports = router;
