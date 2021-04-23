import { ICreateUserService} from '../../src/contracts'

export class CreateUserServiceSpy implements ICreateUserService{
  public params : string
  public result : 'User' = 'User'
  public exec(params: string): 'User' {
    this.params = params
    return this.result
  }
}