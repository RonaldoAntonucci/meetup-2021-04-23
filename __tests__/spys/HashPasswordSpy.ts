import { IHashPassword} from '../../src/contracts'

export class HashPasswordSpy implements IHashPassword{
  public params : string
  public result : 'hash' = 'hash'
  public hash(params: string): 'hash' {
    this.params = params
    return this.result
  }
}