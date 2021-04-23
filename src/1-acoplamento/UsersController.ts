import { CreateUserService } from "./CreateUserService"

const createUser = new CreateUserService()

export default class UsersController{
  public create({email}: {email: string}): 'User'{
    const user = createUser.exec(email)
    console.log('Usuário criado.')
    return user
  }
}