'use strict';

const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Post    = require('../models/Post');

router.route('/')
  .get((req, res) => {
    User.fetchAll().then(users => {
      var users = users.toJSON();
      res.json(users);
    })
  })
  .post((req, res) => {
    var newUser = req.body;
    User.forge({
      username:newUser.username
    }).save().then(() => {
      res.redirect('/api/users');
    })
  })

router.route('/:id')
  .get((req, res) => {
    User.where('id', req.params.id)
      .fetch()
      .then( user => {
        var user = user.toJSON();
        res.json(user);
      })
  });

router.route('/:id/posts')
  .get((req, res) => {
    User.where('id', req.params.id)
      .fetch({withRelated:['posts']})
      .then( user => {
        var user = user.toJSON();
        res.json(user);
      })
  })

module.exports = router;
