import { compare } from 'bcryptjs'
import prismaClient from '../../prisma'
import { sign } from 'jsonwebtoken'

interface AuthUserRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user?.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    // Generate a TOKEN JWT
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      }
    )

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      endereco: user?.endereco,
      token: token,
      subscriptions: user.subscriptions
        ? {
            id: user?.subscriptions?.id,
            status: user?.subscriptions?.status,
          }
        : null,
    }
  }
}

export { AuthUserService }
