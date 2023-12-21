export async function seed(knex) {
  await knex('rentals').del()
  await knex('rentals').insert([
    {
      carProducts_id: 1,
      user_id: 'user_id',
      start_date: '2023-12-27',
      end_date: '2023-12-28',
      start_location: 'start_location',
      end_location: 'end_location',
    },
    {
      carProducts_id: 2,
      user_id: 'user_id',
      start_date: '2023-12-27',
      end_date: '2023-12-28',
      start_location: 'start_location',
      end_location: 'end_location',
    },
    {
      carProducts_id: 3,
      user_id: 'user_id',
      start_date: '2023-12-27',
      end_date: '2023-12-28',
      start_location: 'start_location',
      end_location: 'end_location',
    },
  ])
}
