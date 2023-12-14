export async function seed(knex) {
  await knex('locations').del()
  await knex('locations').insert([
    { name: 'city' },
    { name: 'airport' },
    { name: 'northshore' },
  ])
}
