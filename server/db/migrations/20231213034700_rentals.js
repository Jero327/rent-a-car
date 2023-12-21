export function up(knex) {
  return knex.schema.createTable('rentals', function (table) {
    table.increments('id').primary()
    table.integer('carProducts_id').references('carProducts.id')
    table.string('user_id')
    table.date('start_date')
    table.date('end_date')
    table.string('start_location')
    table.string('end_location')
  })
}

export function down(knex) {
  return knex.schema.dropTable('rentals')
}
