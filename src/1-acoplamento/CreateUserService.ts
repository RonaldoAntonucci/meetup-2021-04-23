import { BcryptAdapter, LuxonAdapter } from "../adapters"
import { AWSMailAdapter } from "../adapters/GCPMailAdapter"
import { PgUsersRepository } from "../repositories/PgUsersRepository"

const dateProvider = new LuxonAdapter()
const usersRepository = new PgUsersRepository()
const hashPassword = new BcryptAdapter()
const mailProvider = new AWSMailAdapter()

export class CreateUserService {
  public exec(email: string): 'User'{

    const isBefore = dateProvider.isBefore(11,18)
    
    const userExists = usersRepository.findByEmail(email)

    const hashedPassword = hashPassword.hash('password')

    const createdUser = usersRepository.create(email)

    mailProvider.send()

    console.log('Exec Create User Service.')
    return createdUser
  }
}