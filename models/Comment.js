const bookshelf = require('../db/bookshelf');

require('./User');
require('./Post');

const Comment = bookshelf.Model.extend({
  tableName:'comments',
  hasTimestamps:true,
  user() {
    return this.hasOne('User');
  },
  post() {
    return this.hasOne('Post');
  }
});

module.exports = bookshelf.model('Comment', Comment);
