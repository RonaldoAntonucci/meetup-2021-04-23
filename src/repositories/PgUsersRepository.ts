import { IFindUserByEmailRepository,ICreateUserRepository} from "../contracts";

export class PgUsersRepository implements IFindUserByEmailRepository, ICreateUserRepository{
  public findByEmail(email: string): 'User' | undefined{
    console.log('Postgres find by email.')
    return undefined
  }

  public create(email: string): 'User'{
    console.log('Postgres create user.')
    return 'User'
  }
}