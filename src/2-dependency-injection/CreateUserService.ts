import { LuxonAdapter,BcryptAdapter, AWSMailAdapter } from '../adapters'
import { ICreateUserService } from '../contracts'
import {PgUsersRepository} from '../repositories/PgUsersRepository'

export class CreateUserService implements ICreateUserService{
  constructor(
    private readonly dateProvider: LuxonAdapter,
    private readonly usersRepository: PgUsersRepository,
    private readonly hashPasswordProvider: BcryptAdapter,
    private readonly mailProvider: AWSMailAdapter
  ){}
  
  public exec(email: string): 'User' {
    const isBefore = this.dateProvider.isBefore(11,18)
    
    const userExists = this.usersRepository.findByEmail(email)

    const hashedPassword = this.hashPasswordProvider.hash('password')

    const createdUser = this.usersRepository.create(email)

    this.mailProvider.send()

    console.log('Exec Create User Service.')
    return 'User'
  }
}