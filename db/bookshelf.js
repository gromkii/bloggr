var environment = process.env.DB_ENV || 'development',
    config      = require('../knexfile')[environment],
    knex        = require('knex')(config),
    bookshelf   = require('bookshelf')(knex);

bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;
