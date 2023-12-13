export async function seed(knex) {
  await knex('rentals').del()
  await knex('rentals').insert([
    {
      carProducts_id: 1,
      user_id: 'user_id',
      start_date: 'start_date',
      end_date: 'end_date',
      start_location: 'start_location',
      end_location: 'end_location',
    },
    {
      carProducts_id: 2,
      user_id: 'user_id',
      start_date: 'start_date',
      end_date: 'end_date',
      start_location: 'start_location',
      end_location: 'end_location',
    },
    {
      carProducts_id: 3,
      user_id: 'user_id',
      start_date: 'start_date',
      end_date: 'end_date',
      start_location: 'start_location',
      end_location: 'end_location',
    },
  ])
}
