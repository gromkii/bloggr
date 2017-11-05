var environment = process.env.DB_ENV || 'development',
    config      = require('../knexfile')[environment],
    knex        = require('knex')(config);

module.exports = knex;
