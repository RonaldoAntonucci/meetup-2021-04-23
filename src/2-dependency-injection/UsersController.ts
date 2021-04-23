import { CreateUserService } from "./CreateUserService";

export class UsersController{
  constructor(
    private readonly createUserService: CreateUserService
  ){}

  public create({email}: {email: string}): 'User'{
    const user = this.createUserService.exec(email)
    console.log('Usuário criado.')
    return user
  }
}