export async function seed(knex) {
  await knex('carProducts').del()
  await knex('carProducts').insert([
    {
      rego_number: 'ABC123',
      model_id: 1,
      location_id: 1,
      daily_rate: 100,
      is_available: true,
    },
    {
      rego_number: 'ABC124',
      model_id: 1,
      location_id: 2,
      daily_rate: 100,
      is_available: true,
    },
    {
      rego_number: 'ABC125',
      model_id: 2,
      location_id: 3,
      daily_rate: 100,
      is_available: true,
    },
  ])
}
