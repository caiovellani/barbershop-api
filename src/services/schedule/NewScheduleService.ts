import prismaClient from '../../prisma'

interface NewScheduleProps {
  user_id: string
  haircut_id: string
  customer: string
}

class NewScheduleService {
  async execute({ user_id, haircut_id, customer }: NewScheduleProps) {
    if (customer === '' || haircut_id === '') {
      throw new Error('Error on create a new schedule')
    }

    const schedule = await prismaClient.service.create({
      data: {
        customer,
        haircut_id,
        user_id,
      },
    })

    return schedule
  }
}

export { NewScheduleService }
