const bookshelf = require('../db/bookshelf');

require('./User');

const Post = bookshelf.Model.extend({
  tableName:'posts',
  hasTimestamps:true,
  user() {
    return this.hasOne('User');
  }
});

module.export = bookshelf.model('Post', Post);
