import prismaClient from '../../prisma'

interface ListScheduleProps {
  user_id: string
}

class ListScheduleService {
  async execute({ user_id }: ListScheduleProps) {
    const schedule = await prismaClient.service.findMany({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        haircut: true,
        customer: true,
      },
    })

    return schedule
  }
}

export { ListScheduleService }
