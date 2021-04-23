import {CreateUserService} from '../src/3-dependency-inversion/CreateUserService'
import {CreateUserRepositorySpy,FindUserByEmailRepositorySpy,HashPasswordSpy,DateProviderSpy,MailProviderSpy} from './spys'

describe('CreateUserService - unit', ()=>{
  let sut: CreateUserService
  let dateProviderSpy: DateProviderSpy
  let findUsersByEmailRepositorySpy : FindUserByEmailRepositorySpy
  let hashPasswordProviderSpy: HashPasswordSpy
  let createUserRepositorySpy: CreateUserRepositorySpy
  let mailProviderSpy: MailProviderSpy

  beforeEach(()=>{
    dateProviderSpy = new DateProviderSpy()
    findUsersByEmailRepositorySpy = new FindUserByEmailRepositorySpy()
    hashPasswordProviderSpy = new HashPasswordSpy()
    createUserRepositorySpy = new CreateUserRepositorySpy()
    mailProviderSpy = new MailProviderSpy()
    sut = new CreateUserService(dateProviderSpy, findUsersByEmailRepositorySpy, hashPasswordProviderSpy, createUserRepositorySpy, mailProviderSpy)
  })

  it('should be defined', ()=>{
    expect(sut).toBeDefined()
  })
})