
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'Jeff'},
        {username:'Hank'},
        {username:'Frank'}
      ]);
    }).then(() => {
      return knex('posts').insert([
        {post_text:'Heya', user_id:1},
        {post_text:'nm u', user_id:2},
        {post_text:'Heya', user_id:3},
      ])
    }).then(() => {
      return knex('comments').insert([
        {comment:'fuck u', post_id:1, user_id:2},
        {comment:'no fuck u', post_id:1, user_id:1},
        {comment:'no fuck all you', post_id:1, user_id:3},
      ])
    });
};
