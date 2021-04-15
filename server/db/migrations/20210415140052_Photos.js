exports.up = function (knex) {
    return knex.schema.createTable('Photos', table => {
      table.increments('id')
      table.text('url')
      table.string('title')
      table.datetime('dateTaken')
      table.string('location')
      table.text('description')
      table.integer('album')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Photos')
  }
  