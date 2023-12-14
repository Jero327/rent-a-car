export function up(knex) {
  return knex.schema.createTable('carProducts', function (table) {
    table.increments('id').primary()
    table.integer('model_id').references('models.id')
    table.integer('location_id').references('locations.id')
    table.decimal('daily_rate')
    table.boolean('is_available')
  })
}

export function down(knex) {
  return knex.schema.dropTable('carProducts')
}
