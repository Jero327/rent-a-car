export  async function seed(knex) {
  await knex('models').del()
  await knex('models').insert([
    { name: 'fit' },
    { name: 'carmery' },
    { name: 'x-trail' },
  ])
}
