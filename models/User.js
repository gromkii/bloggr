const bookshelf = require('../db/bookshelf');

require('./Post');
require('./Comment');

const User = bookshelf.Model.extend({
  tableName:'users',
  hasTimestamps:true,
  posts() {
    return this.hasMany('Post');
  },
  comments() {
    return this.hasMany('Comment');
  }
})

module.exports = bookshelf.model('User', User);
