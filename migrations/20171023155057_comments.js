
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments().primary().index(),
    table.text('comment'),
    table.integer('post_id')
      .references('id')
      .inTable('posts')
      .onDelete('cascade')
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
