export function up(knex) {
  return knex.schema.createTable('locations', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
  })
}

export function down(knex) {
  return knex.schema.dropTable('locations')
}
