import prismaClient from '../../prisma'

interface FinishScheduleProps {
  schedule_id: string
  user_id: string
}

class FinishScheduleService {
  async execute({ schedule_id, user_id }: FinishScheduleProps) {
    if (schedule_id === '' || user_id === '') {
      throw new Error('Error.')
    }

    try {
      const belongToUser = await prismaClient.service.findFirst({
        where: {
          id: schedule_id,
          user_id: user_id,
        },
      })

      if (!belongToUser) {
        throw new Error('Not authorized')
      }

      await prismaClient.service.delete({
        where: {
          id: schedule_id,
        },
      })

      return { message: 'Finalizado com sucesso!' }
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { FinishScheduleService }
