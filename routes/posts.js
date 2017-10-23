'use strict';

const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Post    = require('../models/Post');

router.route('/')
  .get((req, res) => {
    Post.fetchAll().then(posts => {
      var posts = posts.toJSON();
      res.json(posts);
    })
  })
  .post((req, res) => {
    var newPost = req.body;
    Post.forge({
      post_text:newPost.post_text,
      user_id:newPost.user_id
    }).save().then(() => {
      res.redirect('/api/posts');
    })
  })

router.route('/:id')
  .get((req, res) => {
    Post.where('id', req.params.id)
    .fetch()
    .then( post => {
      var post = post.toJSON();
      res.json(post);
    })
  })

module.exports = router;
