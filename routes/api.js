'use strict';

const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Post    = require('../models/Post');

router.route('/')
  .get((req, res) => {
    res.json({message:'Hewwo'});
  });

module.exports = router;
