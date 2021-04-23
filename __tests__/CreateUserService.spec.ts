import {CreateUserService} from '../src/3-dependency-inversion/CreateUserService'
import { IDateProvider, IFindUserByEmailRepository } from '../src/contracts'
import {CreateUserRepositorySpy,FindUserByEmailRepositorySpy,HashPasswordSpy,DateProviderSpy,MailProviderSpy} from './spys'

describe('CreateUserService - unit', ()=>{
  let sut: CreateUserService
  let dateProviderSpy: DateProviderSpy
  let findUsersByEmailRepositorySpy : FindUserByEmailRepositorySpy
  let hashPasswordProviderSpy: HashPasswordSpy
  let createUserRepositorySpy: CreateUserRepositorySpy
  let mailProviderSpy: MailProviderSpy

  beforeEach(()=>{
    sut = new CreateUserService(dateProviderSpy, findUsersByEmailRepositorySpy, hashPasswordProviderSpy, createUserRepositorySpy, mailProviderSpy)
  })

  it('should be defined', ()=>{
    expect(sut).toBeDefined()
  })
})