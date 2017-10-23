'use strict';

const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Post    = require('../models/Post');

router.route('/')
  .get((req, res) => {
    res.json({message:'Hewwo'});
  });

router.route('/users')
  .get((req, res) => {
    User.fetchAll().then( users => {
      res.json(users.toJSON());
    })
  })
  .post((req, res) => {
    var newUser = req.body;

    User.forge({
      username: newUser.username
    }).save()
    .then(() => {
      res.redirect('/api/users');
    });
  });

router.route('/users/:user_id')
  .get((req, res) => {
    User.where('id', req.params.user_id)
      .fetch()
      .then( user => {
        var user = user.toJSON();
        res.json(user);
      })
  })

router.route('/users/:user_id/posts')
  .get((req, res) => {
    User.where('id', req.params.user_id)
      .fetch({withRelated:['posts']})
      .then(user => {
        var user = user.toJSON();
        res.json(user);
      })
  })

module.exports = router;
