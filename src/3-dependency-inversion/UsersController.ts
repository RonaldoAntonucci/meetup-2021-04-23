import { ICreateUserService } from "../contracts";

export class UsersController{
  constructor(
    private readonly createUserService: ICreateUserService
  ){}

  public create({email}: {email: string}): 'User'{
    const user = this.createUserService.exec(email)
    console.log('Usuário criado.')
    return user
  }
}