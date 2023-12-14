export  async function seed(knex) {
  await knex('models').del()
  await knex('models').insert([
    { name: 'fit', make: 'honda', year: 2018, fuel_type: '91' },
    { name: 'carmery', make: 'toyota', year: 2020, fuel_type: '91' },
    { name: 'x-trail', make: 'nissan', year: 2014, fuel_type: '91' },
  ])
}
