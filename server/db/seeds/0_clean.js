export async function seed(knex) {
  await knex('rentals').del()
  await knex('carProducts').del()
  await knex('locations').del()
  await knex('models').del()
}
