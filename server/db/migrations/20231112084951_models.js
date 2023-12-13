export  function up(knex) {
  return knex.schema.createTable('models', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('make')
    table.integer('year')
    table.string('fuel_type')
  })
}

export  function down(knex) {
  return knex.schema.dropTable('models')
}
