const bookshelf = require('../db/bookshelf');

require('./User');
require('./Comment')

const Post = bookshelf.Model.extend({
  tableName:'posts',
  hasTimestamps:true,
  user() {
    return this.hasOne('User');
  },
  comments() {
    return this.hasMany('Comment');
  }
});

module.exports = bookshelf.model('Post', Post);
