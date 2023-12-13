export async function seed(knex) {
  await knex('carProducts').del()
  await knex('carProducts').insert([
    {
      model_id: 1,
      location_id: 1,
      daily_rate: 100,
      is_available: true,
    },
    {
      model_id: 1,
      location_id: 2,
      daily_rate: 100,
      is_available: true,
    },
    {
      model_id: 2,
      location_id: 3,
      daily_rate: 100,
      is_available: true,
    },
  ])
}
