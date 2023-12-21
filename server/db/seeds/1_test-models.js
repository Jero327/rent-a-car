export async function seed(knex) {
  await knex('models').insert([
    { name: 'Fit', make: 'Honda', year: 2018, fuel_type: '91' },
    { name: 'Carmery', make: 'Toyota', year: 2020, fuel_type: '95' },
    { name: 'X-trail', make: 'Nissan', year: 2014, fuel_type: '98' },
  ])
}
