export async function seed(knex) {
  await knex('locations').insert([
    { name: 'City' },
    { name: 'Airport' },
    { name: 'Northshore' },
  ])
}
