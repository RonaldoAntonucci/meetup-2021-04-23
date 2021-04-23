export interface IFindUserByEmailRepository{
  findByEmail(email: string): 'User' | undefined
}