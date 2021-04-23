export interface IHashPassword{
  hash(password: string): 'hash'
}