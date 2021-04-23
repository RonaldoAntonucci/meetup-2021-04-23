import {UsersController} from '../src/3-dependency-inversion/UsersController'
import {CreateUserServiceSpy} from './spys'

describe('UsersController - spec', ()=>{
  let sut: UsersController
  let createUserServiceSpy: CreateUserServiceSpy

  beforeEach(()=>{
    createUserServiceSpy= new CreateUserServiceSpy()
    sut = new UsersController(createUserServiceSpy)
  })

  it('should be defined', ()=>{
    expect(sut).toBeDefined()
  })

  it('should console', ()=>{
    const consoleSpy = jest.spyOn(console, 'log')
    sut.create({email: 'mail'})
    expect(consoleSpy).toBeCalledWith('Usuário criado.')
  })
})