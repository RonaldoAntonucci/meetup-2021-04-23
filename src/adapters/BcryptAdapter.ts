import { IHashPassword } from "../contracts";

export class BcryptAdapter implements IHashPassword{
  public hash(password: string): 'hash'{
    console.log('Bcrypt Hash Password')
    return 'hash'
  }
}