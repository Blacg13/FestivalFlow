const express = require('express');
const router = express.Router();

const CommitteeMember = require('../../models/committeeMember');

//todo: à tester
//* @route    GET api/committeeMembers
//  @desc     Get All Committee Members
//  @access   Public
router.get('/', (request, response) => {
  CommitteeMember.find()
    .sort({
      responsability: 'ascending',
    })
    .then((committeeMembers) => response.json(committeeMembers));
});

//todo: à tester
//* @route    POST api/committeeMembers
//  @desc     Create A Post
//  @access   Public
router.post('/', (request, response) => {
  const newCommitteeMember = new CommitteeMember({
    responsability: request.body.responsability,
    personRef: request.body.personRef, //^>Child
    comments: request.body.comments,
  });
  newCommitteeMember
    .save()
    .then((committeeMember) => response.json(committeeMember))
    .catch((error) =>
      response.status().json({ message: error.status + error.message })
    );
});

module.exports = router;
