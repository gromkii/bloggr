'use strict';

const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Post    = require('../models/Post');
const Comment = require('../models/Comment');

router.route('/')
  .get((req, res) => {
    Comment.fetchAll().then(comments => {
      var comments = comments.toJSON();
      res.json(comments);
    })
  })
  .post((req, res) => {
    var {
      comment,
      post_id,
      user_id
    } = req.body;

    Comment.forge({
      comment,
      post_id,
      user_id
    }).save().then(() => {
      res.redirect('/api/comments'); // Change this later.
    })
  })

router.route('/:id')
  .get((req, res) => {
    Comment.where('id', req.params.id)
    .fetch()
    .then( comment => {
      var comment = comment.toJSON();
      res.json(comment);
    })
  })

module.exports = router;
