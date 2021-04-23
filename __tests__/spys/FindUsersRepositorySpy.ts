import { IFindUserByEmailRepository} from '../../src/contracts'

export class FindUserByEmailRepositorySpy implements IFindUserByEmailRepository{
  public params : string
  public result : 'User' = 'User'
  public findByEmail(params: string): 'User' {
    this.params = params
    return this.result
  }
}