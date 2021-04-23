export interface IFindUserByEmailRepositoryInterface{
  findByEmail(email: string): 'User' | undefined
}