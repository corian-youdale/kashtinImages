
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('Albums').insert([
        {id: 1, title: "Album Title 1", description: "description of album 1", albumSize: 6},
        {id: 2, title: "Album Title 2", description: "description of album 2", albumSize: 3},
        {id: 3, title: "Album Title 3", description: "description of album 3", albumSize: 6}
      ]);
    });
};