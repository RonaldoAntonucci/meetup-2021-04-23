import { ICreateUserRepository} from '../../src/contracts'

export class CreateUserRepositorySpy implements ICreateUserRepository{
  public params : string
  public result : 'User' = 'User'
  public create(params: string): 'User' {
    this.params = params
    return this.result
  }
}