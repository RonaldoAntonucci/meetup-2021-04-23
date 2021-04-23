import {ICreateUserRepository, ICreateUserService, IDateProvider, IFindUserByEmailRepository, IHashPassword, IMailProvider} from '../contracts'

export class CreateUserService implements ICreateUserService{
  constructor(
    private readonly dateProvider: IDateProvider,
    private readonly findUsersRepository: IFindUserByEmailRepository,
    private readonly hashPasswordProvider: IHashPassword,
    private readonly createUserRepository: ICreateUserRepository,
    private readonly mailProvider: IMailProvider
  ){}
  
  public exec(email: string): 'User' {
    const isBefore = this.dateProvider.isBefore(11,18)
    
    const userExists = this.findUsersRepository.findByEmail(email)

    const hashedPassword = this.hashPasswordProvider.hash('password')

    const createdUser = this.createUserRepository.create(email)

    this.mailProvider.send()

    console.log('Exec Create User Service.')
    return 'User'
  }
}