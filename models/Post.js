const bookshelf = require('../db/bookshelf');

require('./User');

const Post = bookshelf.Model.extend({
  tableName:'posts',
  hasTimestamps:true,
  user() {
    return this.hasOne('User');
  }
});

module.exports = bookshelf.model('Post', Post);
