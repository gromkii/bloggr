
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary().index(),
    table.text('username')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
