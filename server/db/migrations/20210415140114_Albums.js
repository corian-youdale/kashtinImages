exports.up = function (knex) {
    return knex.schema.createTable('Albums', table => {
      table.increments('id')
      table.string('title')
      table.text('description')
      table.integer('albumSize')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Albums')
  }
  