
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'steve', password:"jobs"},
        {username: 'javi', password:"dont tell"},
        {username: 'sam', password:"secret"}
      ]);
};
