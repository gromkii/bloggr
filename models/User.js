const bookshelf = require('bookshelf');

require('./Post');

const User = bookshelf.Model.extend({
  tableName:'users',
  hasTimestamps:true,
  posts() {
    return this.hasMany('Post');
  }
})

module.exports = bookshelf.model('User', User);
