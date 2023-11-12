export  async function seed(knex) {
  await knex('cars').del()
  await knex('cars').insert([
    { id: 1, name: 'fit' },
    { id: 2, name: 'carmery' },
    { id: 3, name: 'x-trail' },
  ])
}
